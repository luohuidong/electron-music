import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "Store/index";
import { requestPlaylistDetail } from "Api/playList";
import { savePlayList, saveCurrentSong, saveCurrentSongIndex } from "./actions";

/**
 * 获取歌单歌曲列表
 * @param playListId
 */
export function thunkSavePlayerPlayList(
  playListId: number
): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch): Promise<void> => {
    try {
      const result = await requestPlaylistDetail(playListId);
      const { tracks } = result;
      dispatch(savePlayList(tracks));
      dispatch(saveCurrentSong(tracks[0]));
      dispatch(saveCurrentSongIndex(0));
    } catch (error) {
      console.error("Player thunkSavePlayList", error.message);
    }
  };
}
