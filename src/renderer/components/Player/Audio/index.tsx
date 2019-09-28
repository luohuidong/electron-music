import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { requestSongPlayUrls } from 'Api/playList'
import { AppState } from 'Store/index'
import { types as playerTypes, actions as playerActions } from 'Store/components/Player'

interface Props {
  // state
  currentSong: playerTypes.Song;
  playList: playerTypes.Song[];
  currentSongIndex: number;
  percentage: number;
  // actions
  savePercentage: typeof playerActions.savePercentage;
  saveCurrentSongIndex: typeof playerActions.saveCurrentSongIndex;
  saveCurrentSong: typeof playerActions.saveCurrentSong;
}

type EffectCallBackReturnType = void | (() => void)

function Audio(props: Props): JSX.Element {
  let audioRef = React.createRef<HTMLAudioElement>()

  // 获取当前播放可取的播放 url
  const [playUrl, setPlayUrl] = useState()
  useEffect((): EffectCallBackReturnType => {
    const { currentSong } = props
    console.log("TCL: currentSong ....", currentSong)

    if (currentSong.id) {
      requestSongPlayUrls(`${currentSong.id}`).then((songPlayUrlDatas): void => {
        const songPlayUrlData = songPlayUrlDatas[0]
        const playUrl = songPlayUrlData.url
        setPlayUrl(playUrl)
      })
    }
  }, [props.currentSong])

  // 获取当前播放进度百分比
  useEffect((): EffectCallBackReturnType => {
    function handleTimeUpdate(e): void {
      const { target } = e
      const { currentTime, duration } = target

      if (!currentTime || !duration) {
        return
      }

      const percentage = currentTime / duration
      props.savePercentage(percentage)
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
  useEffect((): EffectCallBackReturnType => {
    function playNextSong(): void {
      const { saveCurrentSongIndex, playList, currentSongIndex, saveCurrentSong } = props
      const length = playList.length

      let nextSongIndex = currentSongIndex + 1

      if (length <= nextSongIndex) {
        nextSongIndex = 0
      }

      saveCurrentSongIndex(nextSongIndex)
      saveCurrentSong(playList[nextSongIndex])
    }

    const { savePercentage, percentage } = props
    savePercentage(percentage)

    if (percentage === 1) {
      playNextSong() // 播放下一首歌
      savePercentage(0) // 将播放进度百分比重置为 0
    }
  }, [props.percentage])

  return (
    <div>
      <audio src={playUrl} controls ref={audioRef} autoPlay></audio>
    </div>
  )
}

interface State {
  currentSong: playerTypes.Song;
  playList: playerTypes.Song[];
  currentSongIndex: number;
  percentage: number;
}

const mapStateToProps = ({ player }: AppState): State => ({
  currentSong: player.currentSong,
  playList: player.playList,
  currentSongIndex: player.currentSongIndex,
  percentage: player.percentage,
})

const mapDispatchToProps = {
  savePercentage: playerActions.savePercentage,
  saveCurrentSongIndex: playerActions.saveCurrentSongIndex,
  saveCurrentSong: playerActions.saveCurrentSong
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
