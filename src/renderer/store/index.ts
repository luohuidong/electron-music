import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducer as playListReducer } from './pages/PlayList'
import { reducer as PlayerReducer } from './components/Player'

const rootReducer = combineReducers({
  player: PlayerReducer,
  playList: playListReducer
})

export type AppState = ReturnType<typeof rootReducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))
