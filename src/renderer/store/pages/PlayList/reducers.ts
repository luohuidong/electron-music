import { state as initialState, State } from './state'
import { GET_HIGHT_QUALITY_PLAY_LIST } from './actionTypes'

interface Action {
  payload: object;
  type: string;
}

export default function(state = initialState, action: Action): State  {
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
