import { SAVE_PLAY_LIST, ActionTypes, SavePlayListItem } from './types'

/**
 * 保存精选歌单列表数据
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
