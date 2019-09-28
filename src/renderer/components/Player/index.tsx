import React from 'react'

import Button from './Button'
import Audio from './Audio'
import styles from './style.scss'

export default function Player (): JSX.Element {
  return (
    <div className={styles.container}>
      <Button />

      <div></div>
      <div></div>
      <Audio />
    </div>
  )
}
