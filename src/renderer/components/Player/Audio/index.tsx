import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { requestSongPlayUrls } from 'Api/playList'
import { AppState } from 'Store/index'
import { types as playerTypes, actions as playerActions } from 'Store/components/Player'
import { EffectCallBack } from 'Types/index'

function Audio(): JSX.Element {
  let audioRef = React.createRef<HTMLAudioElement>()
  const dispatch = useDispatch()
  const playerState = useSelector(({ player }: AppState): playerTypes.State => player)

  /** 当前正在播放的歌曲 */
  const [playUrl, setPlayUrl] = useState()

  // 获取当前播放可取的播放 url
  useEffect((): EffectCallBack => {
    async function handleRequestSongPlayUrls(song: playerTypes.Song): Promise<void> {
      try {
        const songPlayUrlDatas = await requestSongPlayUrls(`${song.id}`)
        const songPlayUrlData = songPlayUrlDatas[0]
        const playUrl = songPlayUrlData.url

        if (!playUrl) {
          throw new Error('当前歌曲无法播放')
        }

        setPlayUrl(playUrl)
      } catch (error) {
        console.error(error.message)
      }
    }

    const currentSong = playerState.currentSong

    if (currentSong.id) {
      handleRequestSongPlayUrls(currentSong)
    }
  }, [playerState.currentSong])

  // 当播放音乐的 url 发生变化时，将播放器设置为播放状态
  useEffect((): EffectCallBack => {
    const audioElement = audioRef.current

    if (!audioElement || !playUrl) {
      return
    }

    audioElement.play()
    dispatch(playerActions.savePlayState(true))
  }, [playUrl])

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

  // 当前播放进度为百分百的时候，切换下一首歌
  useEffect((): EffectCallBack => {
    function playNextSong(): void {
      const playList = playerState.playList

      const length = playList.length

      let nextSongIndex = playerState.currentSongIndex + 1

      if (length <= nextSongIndex) {
        nextSongIndex = 0
      }

      dispatch(playerActions.saveCurrentSongIndex(nextSongIndex))
      dispatch(playerActions.saveCurrentSong(playList[nextSongIndex]))
    }

    const percentage = playerState.percentage
    const savePercentage = playerActions.savePercentage
    dispatch(savePercentage(percentage))

    if (percentage === 1) {
      playNextSong() // 播放下一首歌
      savePercentage(0) // 将播放进度百分比重置为 0
    }
  }, [playerState.percentage])

  // playState 为 true 的时候，播放器设置为播放
  // playState 为 false 的时候，将播放器设置为暂停
  useEffect((): EffectCallBack => {
    const audioElement = audioRef.current
    if (!audioElement) {
      return
    }

    if (playerState.playState) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }, [playerState.playState])

  return (
    <div>
      <audio ref={audioRef} src={playUrl}>
      </audio>
    </div>
  )
}

export default Audio
