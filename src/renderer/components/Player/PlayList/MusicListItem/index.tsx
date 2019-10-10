import React, { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

import { AppState } from 'Store/index'
import { types as playerTypes, actions as playerActions } from 'Store/components/Player'

import styles from './style.scss'

interface Props {
  data: playerTypes.Song; // 歌曲数据
}

export default function MusicListItem(props: Props): JSX.Element {
  const dispatch = useDispatch()

  const { data } = props

  const playerState = useSelector(({ player }: AppState): playerTypes.State => player )

  function getArtistsName(data: playerTypes.Song): string {
    const artists = data.ar
    const artistsName = artists.map((element): string => element.name).join(',')
    return artistsName
  }

  function handleDoubleClick(e: MouseEvent): void {
    e.stopPropagation()

    const songIndex = playerState.playList.findIndex((song): boolean => song.id === data.id)
    dispatch(playerActions.saveCurrentSongIndex(songIndex))
    dispatch(playerActions.saveCurrentSong(data))
  }

  function handleClick(e: MouseEvent): void {
    e.stopPropagation()
  }

  const { currentSong } = playerState

  return (
    <div
      className={styles.container}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <div className={styles.songNameContainer}>
        <span className={classnames(styles.songName, { [styles.playing]: data.id === currentSong.id })}>
          {data.name}
        </span>
      </div>

      <div className={styles.artistsNameContainer}>
        <span className={classnames(styles.artistsName, { [styles.playing]: data.id === currentSong.id })}>
          {getArtistsName(data)}
        </span>
      </div>
    </div>
  )
}
