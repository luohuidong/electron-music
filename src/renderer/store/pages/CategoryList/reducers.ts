import { State, ActionTypes, SAVE_CATEGORIES } from "./types";
import { state as initialState } from "./state";

export default function (state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
