import React from 'react'
import { useSelector } from 'react-redux'

import { ScrollView } from 'Components/index'
import MusicListItem from '../MusicListItem'

import { AppState } from 'Store/index'
import { types as playerTypes } from 'Store/components/Player'
import styles from './style.scss'

export default function MusicList(): JSX.Element {
  const { playList } = useSelector(({ player }: AppState): playerTypes.State => player )

  return (
    <div className={styles.container}>
      <ScrollView className={styles.scrollView}>
        <>
          {
            playList.map((element): JSX.Element => (
              <MusicListItem
                key={element.id}
                data={element}
              />
            ))
          }
        </>
      </ScrollView>
    </div>
  )
}
