import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as playListReducer } from './PlayList';
import { reducer as PlayerReducer } from './Player';
import { reducer as categoryListReducer } from './CategoryList';

const rootReducer = combineReducers({
  player: PlayerReducer,
  playList: playListReducer,
  categoryList: categoryListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
