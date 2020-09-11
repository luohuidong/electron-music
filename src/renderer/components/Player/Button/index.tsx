import React from 'react'

import Back from './Back'
import Play from './Play'
import Next from './Next'

import styles from './index.module.scss'

function Button (): JSX.Element {
  return (
    <div className={styles.buttonContainer}>
      <Back />
      <Play />
      <Next />
    </div>
  )
}

export default React.memo(Button)
