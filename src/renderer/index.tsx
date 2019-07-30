import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'normalize.css'

import style from './style.scss'

function App(): React.ReactElement {
  return (
    <div className={style.container}>
      <h1>
        Hello world!
      </h1>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
