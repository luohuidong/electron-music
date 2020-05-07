import React from 'react'
import { remote } from 'electron'

import style from './style.scss'

const createSubWindows = remote.require('./createSubWindows')

function About() {
  console.log('windows', window.location)
  function handleCreteSubWindows(): void {
    createSubWindows('/about')
  }

  return (
    <div className={style.container}>
      <h1>About</h1>
      <button onClick={handleCreteSubWindows}>abc</button>
    </div>
  )
}

export default About
