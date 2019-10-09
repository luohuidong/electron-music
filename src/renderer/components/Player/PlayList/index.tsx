import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'Store/index'
import { types as playerTypes } from 'Store/components/Player'

import { Dropdown } from 'Components/index'
import MusicList from './MusicList'

import compactDiscIcon from './compact-disc.svg'
import styles from './style.scss'

export default function PlayList(): JSX.Element {
  const playerState = useSelector(({ player }: AppState): playerTypes.State => player)
  const playList = playerState.playList

  return (
    <Dropdown
      className={styles.outerContainer}
      overLay={<MusicList />}
      placement='topRight'
    >
      <div className={styles.innerContainer}>
        <img className={styles.img} src={compactDiscIcon} />

        <span className={styles.text}>
          {playList.length}
        </span>
      </div>
    </Dropdown>
  )
}
