import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import Pages from './pages/index'
import { store } from './store'

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  )
}

export default hot(App)
