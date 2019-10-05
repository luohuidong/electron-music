import React, { useEffect, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from 'Store/index'
import { EffectCallBack } from 'Types/index'
import { types as playerTypes, actions as playerActions } from 'Store/components/Player'


import backIcon from './back.svg'
import styles from './style.scss'

function Back(): JSX.Element {
  const dispatch = useDispatch()
  const playerState = useSelector(({ player }: AppState): playerTypes.State => player)

  function handleClick(e: MouseEvent): void {
    e.stopPropagation()

    const playList = playerState.playList
    const length = playList.length

    /** 前一首歌在歌曲列表中的索引 */
    let previousSongIndex = playerState.currentSongIndex + 1

    if (previousSongIndex < 0) {
      previousSongIndex = length - 1
    }

    dispatch(playerActions.saveCurrentSongIndex(previousSongIndex))
    dispatch(playerActions.saveCurrentSong(playList[previousSongIndex]))
  }

  return (
    <img
      className={styles.img}
      src={backIcon}
      alt="上一首歌"
      title="上一首歌"
      onClick={handleClick}
    />
  )
}

export default Back
