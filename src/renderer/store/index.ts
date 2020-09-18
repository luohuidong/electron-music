import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as playListReducer } from "./pages/PlayList";
import { reducer as PlayerReducer } from "./components/Player";
import { reducer as categoryListReducer } from "./pages/CategoryList";

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
