import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from 'Store/index'
import { requestPlayList } from 'Api/playList'
import { savePlayList, savePlayListQueryParam } from './actions'

interface ThunkSavePlayListParam {
  order: string; // 'new' or 'hot'，分别对应这最新歌单和最热歌单
  category: string; // 歌单分类，如 "华语", "古风", "欧美" 等，可从歌单分类接口获取(/playlist/catlist) 中获取
  limit: number; // 结果返回数量，如果不传默认为 50
  offset: number; // 偏移量，用于分页，如果不传默认为 0
}

/**
 * 获取精选歌单列表数据
 */
export function thunkSavePlayList(param: ThunkSavePlayListParam): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch): Promise<void> => {
    try {
      const result = await requestPlayList(param)
      const { playlists } = result

      dispatch(savePlayListQueryParam(param))
      dispatch(savePlayList(playlists))
    } catch (error) {
      console.error('thunkSavePlayList', error.message)
    }
  }
}
