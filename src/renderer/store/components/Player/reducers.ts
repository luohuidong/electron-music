import { State, ActionTypes, SAVE_PLAY_LIST, SAVE_CURRENT_SONG } from './types'
import { state as initialState } from './state'

export default function(state = initialState, action: ActionTypes): State  {
  switch (action.type) {
    case SAVE_PLAY_LIST:
    case SAVE_CURRENT_SONG:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
