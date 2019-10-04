import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from 'Store/index'
import { actions as playerActions } from 'Store/components/Player/index'

import playIcon from './play.svg'
import pauseIcon from './pause.svg'
import styles from './style.scss'

function Play(): JSX.Element {
  const dispatch = useDispatch()

  const playState = useSelector(({ player }: AppState): boolean => player.playState)

  function handleClick(): void {
    dispatch(playerActions.savePlayState(!playState))
  }

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
