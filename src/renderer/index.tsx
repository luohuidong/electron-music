import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'react-hot-loader' // react-hot-loader is required before react and react-dom
import React from 'react'
import * as ReactDOM from 'react-dom'
import 'normalize.css'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
