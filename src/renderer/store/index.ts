import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'


import { reducer as PlayList } from './pages/PlayList'

const rootReducer = combineReducers({
  PlayList
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
