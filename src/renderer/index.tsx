import * as React from 'react'
import * as ReactDOM from 'react-dom'

import style from './style.scss'

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <h1>
          Hello world!
        </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
