import React, { MouseEvent } from 'react'

import styles from './index.module.scss'

export default function Slider(): JSX.Element {
  function handleClick(e: MouseEvent): void {
    e.stopPropagation()
  }

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.button} onClick={handleClick}>
          <div className={styles.centerCircle} />
        </div>
      </div>
    </div>
  )
}
