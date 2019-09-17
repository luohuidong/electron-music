import { State, ActionTypes, SAVE_PLAY_LIST } from './types'
import { state as initialState } from './state'

export default function(state = initialState, action: ActionTypes): State  {
  switch (action.type) {
    case SAVE_PLAY_LIST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
