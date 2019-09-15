import React from 'react'

import Back from './Back'
import Play from './Play'
import Next from './Next'
import styles from './style.scss'

export default function Player (): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Back />
        <Play />
        <Next />
      </div>

      <div></div>
      <div></div>
    </div>
  )
}
