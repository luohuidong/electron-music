import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { requestSongPlayUrls } from 'Api/playList'
import { AppState } from 'Store/index'
import { types as playerTypes, actions as playerActions } from 'Store/components/Player'

type EffectCallBack = void | (() => void)

function Audio(): JSX.Element {
  let audioRef = React.createRef<HTMLAudioElement>()
  const dispatch = useDispatch()

  /** 当前正在播放的歌曲 */
  const currentSong = useSelector(({ player }: AppState): playerTypes.Song => player.currentSong)
  const [playUrl, setPlayUrl] = useState()

  // 获取当前播放可取的播放 url
  useEffect((): EffectCallBack => {

    async function handleRequestSongPlayUrls(song: playerTypes.Song): Promise<void> {
      try {
        const songPlayUrlDatas = await requestSongPlayUrls(`${song.id}`)
        const songPlayUrlData = songPlayUrlDatas[0]
        const playUrl = songPlayUrlData.url
        setPlayUrl(playUrl)
      } catch (error) {
        console.error(error.message)
      }
    }

    if (currentSong.id) {
      handleRequestSongPlayUrls(currentSong)
    }
  }, [currentSong])

  // 获取当前播放进度百分比
  useEffect((): EffectCallBack => {
    function handleTimeUpdate(e): void {
      const { target } = e
      const { currentTime, duration } = target

      if (!currentTime || !duration) {
        return
      }

      const percentage = currentTime / duration
      dispatch(playerActions.savePercentage(percentage))
    }

    const audio = audioRef.current

    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate)
    }

    return (): void => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  })

  /** 播放列表 */
  const playList = useSelector(({ player }: AppState): playerTypes.Song[] => player.playList)
  /** 当前播放歌曲在播放列表中的索引 */
  const currentSongIndex = useSelector(({ player }: AppState): number => player.currentSongIndex)
  /** 当前歌曲播放进度百分比 */
  const percentage = useSelector(({ player }: AppState): number => player.percentage)

  // 当前播放进度为百分百的时候，切换下一首歌
  useEffect((): EffectCallBack => {
    function playNextSong(): void {
      const length = playList.length

      let nextSongIndex = currentSongIndex + 1

      if (length <= nextSongIndex) {
        nextSongIndex = 0
      }

      dispatch(playerActions.saveCurrentSongIndex(nextSongIndex))
      dispatch(playerActions.saveCurrentSong(playList[nextSongIndex]))
    }

    const savePercentage = playerActions.savePercentage
    dispatch(savePercentage(percentage))

    if (percentage === 1) {
      playNextSong() // 播放下一首歌
      savePercentage(0) // 将播放进度百分比重置为 0
    }
  }, [percentage])

  /** 当前歌曲的播放状态 */
  const playState = useSelector(({ player }: AppState): boolean => player.playState)
  useEffect((): EffectCallBack => {
    const audioElement = audioRef.current
    if (!audioElement) {
      return
    }

    if (playState) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }, [playState])

  return (
    <div>
      <audio controls ref={audioRef} src={playUrl}>
      </audio>
    </div>
  )
}

export default Audio
