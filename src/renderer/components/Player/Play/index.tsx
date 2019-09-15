import React from 'react'

import playIcon from './play.svg'
import pauseIcon from './play.svg'
import styles from './style.scss'

function Play(): JSX.Element {
  return (
    <img src={playIcon} className={styles.img} alt="播放" title="播放" />
  )
}

export default Play
