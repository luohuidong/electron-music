import { GET_HIGHT_QUALITY_PLAY_LIST } from './actionTypes'

interface GetHightQualityPlayList {
  type: GET_HIGHT_QUALITY_PLAY_LIST;
  payload: object;
}

export function getHightQualityPlayList(): GetHightQualityPlayList {
  return {
    type: GET_HIGHT_QUALITY_PLAY_LIST,
    payload: {

    }
  }
}

