import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { requestSongPlayUrls } from 'Api/playList'
import { AppState } from 'Store/index'
import { types as playerTypes, actions as playerActions } from 'Store/components/Player'

interface Props {
  currentSong: playerTypes.Song;
  savePercentage: typeof playerActions.savePercentage;
}

type EffectCallBackReturnType = void | (() => void)

function Audio(props: Props): JSX.Element {
  let audioRef = React.createRef<HTMLAudioElement>()

  // 获取当前播放可取的播放 url
  const [playUrl, setPlayUrl] = useState()
  useEffect((): void => {
    const { currentSong } = props

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
  }, [])

  return (
    <div>
      <audio src={playUrl} controls ref={audioRef} autoPlay></audio>
    </div>
  )
}

interface State {
  currentSong: playerTypes.Song;
}

const mapStateToProps = ({ player }: AppState): State => ({
  currentSong: player.currentSong,
})

const mapDispatchToProps = {
  savePercentage: playerActions.savePercentage
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
