import { State, GET_HIGHT_QUALITY_PLAY_LIST, ActionTypes } from './types'
import { state as initialState } from './state'

export default function(state = initialState, action: ActionTypes): State  {
  switch (action.type) {
    case GET_HIGHT_QUALITY_PLAY_LIST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
