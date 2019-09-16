import React from 'react'

import backIcon from './next.svg'
import styles from './style.scss'

function Next(): JSX.Element {
  return (
    <img 
      className={styles.img} 
      src={backIcon} 
      alt="下一首歌" 
      title="下一首歌" 
    />
  )
}

export default Next
