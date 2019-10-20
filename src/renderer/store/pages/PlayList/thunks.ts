import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from 'Store/index'
import { requestPlayList } from 'Api/playList'
import { savePlayList } from './actions'

/**
 * 获取精选歌单列表数据
 */
export function thunkSavePlayList(order?: string, category?: string): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch): Promise<void> => {

    try {
      const result = await requestPlayList(order, category)
      const { playlists } = result

      dispatch(savePlayList(playlists))
    } catch (error) {
      console.error('thunkSavePlayList', error.message)
    }
  }
}
