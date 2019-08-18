import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducer as playListReducer } from './pages/PlayList'

const rootReducer = combineReducers({
  playList: playListReducer
})

export type AppState = ReturnType<typeof rootReducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))
