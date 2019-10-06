import React from 'react'

import Button from './Button'
import Audio from './Audio'
import ProgressBar from './ProgressBar'
import Volume from './Volume'
import PlayList from './PlayList'

import styles from './style.scss'

export default function Player (): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button />
      </div>

      <div className={styles.center}>
        <ProgressBar />
      </div>

      <div className={styles.right}>
        <Volume />
        <PlayList />
      </div>

      <Audio />
    </div>
  )
}
