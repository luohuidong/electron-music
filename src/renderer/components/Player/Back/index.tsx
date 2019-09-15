import React from 'react'

import backIcon from './back.svg'
import styles from './style.scss'

function Back(): JSX.Element {
  return (
    <img 
      className={styles.img} 
      src={backIcon} 
      alt="上一首歌" 
      title="上一首歌" 
    />
  )
}

export default Back
