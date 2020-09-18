import {
  State,
  ActionTypes,
  SAVE_PLAY_LIST,
  SAVE_PLAY_LIST_QUERY_PARAMS,
} from "./types";
import { state as initialState } from "./state";

export default function (state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case SAVE_PLAY_LIST:
    case SAVE_PLAY_LIST_QUERY_PARAMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
