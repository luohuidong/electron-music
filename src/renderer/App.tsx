import React from 'react'
import { hot } from 'react-hot-loader/root'

import style from './style.scss'

function App(): React.ReactElement {
  return (
    <div className={style.container}>
      <h1>Hello world!</h1>
      <h1>你好，世界！</h1>
    </div>
  )
}

export default hot(App)
