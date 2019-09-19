import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from 'Store/index'
import { requestPlaylistDetail } from 'Api/playList'
import { savePlayList } from './actions'

/**
 * 获取精选歌单列表数据
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
