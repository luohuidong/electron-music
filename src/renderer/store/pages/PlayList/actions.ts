import { GET_HIGHT_QUALITY_PLAY_LIST, ActionTypes, HightQualityPlayListItem } from './types'

/**
 * 保存精选歌单列表数据
 * @param hightQualityPlayList 精选歌单列表数据
 */
export function saveHightQualityPlayList(hightQualityPlayList: HightQualityPlayListItem[]): ActionTypes {
  return {
    type: GET_HIGHT_QUALITY_PLAY_LIST,
    payload: {
      hightQualityPlayList
    }
  }
}
