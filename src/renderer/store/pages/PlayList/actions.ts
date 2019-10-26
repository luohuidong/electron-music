import {
  ActionTypes,
  SAVE_PLAY_LIST, SavePlayListItem,
  SAVE_PLAY_LIST_QUERY_PARAMS, PlayListQueryParams
} from './types'

/**
 * 保存歌单列表数据
 * @param playList 精选歌单列表数据
 */
export function savePlayList(playList: SavePlayListItem[]): ActionTypes {
  return {
    type: SAVE_PLAY_LIST,
    payload: {
      playList
    }
  }
}

/**
 * 保存歌单列表查询参数
 * @param playListQueryParams
 */
export function savePlayListQueryParam(playListQueryParams: PlayListQueryParams): ActionTypes {
  return {
    type: SAVE_PLAY_LIST_QUERY_PARAMS,
    payload: {
      playListQueryParams
    }
  }
}
