import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from 'Store/index'
import { requestPlaylistDetail } from 'Api/playList'
import { savePlayList } from './actions'

/**
 * 获取歌单歌曲列表
 * @param playListId 
 */
export function thunkSavePlayList(playListId: number): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch): Promise<void> => {
    try {
      const result = await requestPlaylistDetail(playListId)
      const { tracks } = result

      dispatch(savePlayList(tracks))
    } catch (error) {
      console.error('thunkGetHightQualityPlayList', error.message)
    }
  }
}
