import React, { MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from 'Store/index'
import { actions as playerActions, types as playerTypes } from 'Store/components/Player/index'

import playIcon from './play.svg'
import pauseIcon from './pause.svg'
import styles from './style.scss'

function Play(): JSX.Element {
  const dispatch = useDispatch()

  const playerState = useSelector(({ player }: AppState): playerTypes.State => player)

  function handleClick(e: MouseEvent): void {
    e.stopPropagation()
    const { playList, playState } = playerState
    if (playList.length === 0) {
      return
    }
    dispatch(playerActions.savePlayState(!playState))
  }

  const playState = playerState.playState

  return (
    <img
      src={playState ? pauseIcon : playIcon}
      className={styles.img}
      alt={playState ? '暂停' : '播放'}
      title={playState ? '暂停' : '播放'}
      onClick={handleClick}
    />
  )
}

export default Play
