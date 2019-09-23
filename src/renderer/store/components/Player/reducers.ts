import { State, ActionTypes, SAVE_PLAY_LIST, SAVE_CURRENT_SONG, SAVE_SONG_IDS } from './types'
import { state as initialState } from './state'

export default function(state = initialState, action: ActionTypes): State  {
  switch (action.type) {
    case SAVE_PLAY_LIST:
    case SAVE_CURRENT_SONG:
    case SAVE_SONG_IDS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
