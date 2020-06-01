import React from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout, Player } from 'Components/index'
import Home from './PlayList'


function App(): JSX.Element {
  return (
    <Router>
      <Layout footer={<Player />}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default hot(App)
