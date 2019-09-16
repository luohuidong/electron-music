import React from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route } from 'react-router-dom'

import { Layout, Player } from 'Components/index'
import Home from './PlayList'

function App(): JSX.Element {
  return (
    <Router>
      <Layout footer={<Player />}>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  )
}

export default hot(App)
