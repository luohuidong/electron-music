// state type

/** 精选歌单 */
export interface SavePlayListItem {
  name: string;
  id: number;
  description: string;
  coverImgUrl: string;
}

export interface PlayListQueryParams {
  order: string;
  category: string;
  limit: number;
  offset: number;
}

/** PlayList State */
export interface State {
  playList: SavePlayListItem[];
  playListQueryParams: PlayListQueryParams;
}

// action type

/** 获取精选歌单 */
export const SAVE_PLAY_LIST = "PAGES_PLAY_LIST/SAVE_PLAY_LIST";

interface GetPlayListAction {
  type: typeof SAVE_PLAY_LIST;
  payload: {
    playList: SavePlayListItem[];
  };
}

export const SAVE_PLAY_LIST_QUERY_PARAMS =
  "PAGES_PLAY_LIST/SAVE_PLAY_LIST_QUERY_PARAMS";

interface SavePlayListQueryParamsAction {
  type: typeof SAVE_PLAY_LIST_QUERY_PARAMS;
  payload: {
    playListQueryParams: PlayListQueryParams;
  };
}

export type ActionTypes = GetPlayListAction | SavePlayListQueryParamsAction;
