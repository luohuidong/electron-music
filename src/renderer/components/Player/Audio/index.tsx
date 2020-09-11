import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { requestSongPlayUrls } from "Api/playList";
import { AppState } from "Store/index";
import { types as playerTypes, actions as playerActions } from "Store/components/Player";
import { EffectCallBack } from "Types/index";

function Audio(): JSX.Element {
  let audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();

  /** 当前正在播放的歌曲 */
  const currentSong = useSelector(({ player }: AppState): playerTypes.Song => player.currentSong);

  /** 当前正在播放的歌曲 url */
  const [playUrl, setPlayUrl] = useState<string>();

  // 获取当前播放可取的播放 url
  useEffect((): EffectCallBack => {
    async function handleRequestSongPlayUrls(song: playerTypes.Song): Promise<void> {
      try {
        const songPlayUrlDatas = await requestSongPlayUrls(`${song.id}`);
        const songPlayUrlData = songPlayUrlDatas[0];
        const playUrl = songPlayUrlData.url;

        if (!playUrl) {
          throw new Error("当前歌曲无法播放");
        }

        setPlayUrl(playUrl);
      } catch (error) {
        console.error(error.message);
      }
    }

    if (currentSong.id) {
      handleRequestSongPlayUrls(currentSong);
    }
  }, [currentSong]);

  // 当播放音乐的 url 发生变化时，将播放器设置为播放状态
  useEffect((): EffectCallBack => {
    const audioElement = audioRef.current;

    if (!audioElement || !playUrl) {
      return;
    }

    audioElement.play();
    dispatch(playerActions.savePlayState(true));
  }, [playUrl]);

  /** 歌单歌曲列表 */
  const playList = useSelector(({ player }: AppState): playerTypes.Song[] => player.playList);
  /** 当前播放的歌曲在歌曲列表中对应的索引 */
  const currentSongIndex = useSelector(({ player }: AppState): number => player.currentSongIndex);
  /** 当前歌曲播放百分比 */
  const percentage = useSelector(({ player }: AppState): number => player.percentage);

  // 当前播放进度为百分百的时候，切换下一首歌
  useEffect((): EffectCallBack => {
    function playNextSong(): void {
      const length = playList.length;

      let nextSongIndex = currentSongIndex + 1;

      if (length <= nextSongIndex) {
        nextSongIndex = 0;
      }

      dispatch(playerActions.saveCurrentSongIndex(nextSongIndex));
      dispatch(playerActions.saveCurrentSong(playList[nextSongIndex]));
    }

    const savePercentage = playerActions.savePercentage;
    dispatch(savePercentage(percentage));

    if (percentage === 1) {
      playNextSong(); // 播放下一首歌
      savePercentage(0); // 将播放进度百分比重置为 0
    }
  }, [percentage]);

  /** 播放器播放状态 */
  const playState = useSelector(({ player }: AppState): boolean => player.playState);

  // playState 为 true 的时候，播放器设置为播放
  // playState 为 false 的时候，将播放器设置为暂停
  useEffect((): EffectCallBack => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    if (playState) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [playState]);

  return (
    <audio
      ref={audioRef}
      src={playUrl}
      onTimeUpdate={(e) => {
        const { currentTarget } = e;
        if (!currentTarget) {
          return;
        }
        const { currentTime, duration } = currentTarget;

        if (!currentTime || !duration) {
          return;
        }

        dispatch(playerActions.savePlayerTime(currentTime, duration));

        const percentage = currentTime / duration;
        dispatch(playerActions.savePercentage(percentage));
      }}
    />
  );
}

export default React.memo(Audio);
