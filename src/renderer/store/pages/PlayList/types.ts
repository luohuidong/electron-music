// state type

/** 精选歌单 */
export interface SavePlayListItem {
  name: string;
  id: number;
  description: string;
  coverImgUrl: string;
}

/** PlayList State */
export interface State {
  playList: SavePlayListItem[];
}

// action type

/** 获取精选歌单 */
export const SAVE_PLAY_LIST = 'PAGES_PLAY_LIST/SAVE_PLAY_LIST'

interface GetPlayListAction {
  type: typeof SAVE_PLAY_LIST;
  payload: {
    playList: SavePlayListItem[];
  };
}

export type ActionTypes = GetPlayListAction
