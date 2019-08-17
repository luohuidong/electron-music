import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from 'Store/index'
import { requestHighQualityPlayList } from 'Api/playList'
import { saveHightQualityPlayList } from './actions'

export function thunkGetHightQualityPlayList(): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch): Promise<void> => {

    try {
      const result = await requestHighQualityPlayList()
      const { playlists } = result

      dispatch(saveHightQualityPlayList(playlists))
    } catch (error) {
      console.error('thunkGetHightQualityPlayList', error.message)
    }
  }
}


