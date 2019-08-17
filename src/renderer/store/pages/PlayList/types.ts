// state type

/** 精选歌单 */
export interface HightQualityPlayListItem {
  name: string;
  id: number;
  description: string;
}

/** PlayList State */
export interface State {
  hightQualityPlayList: HightQualityPlayListItem[];
}

// action type

/** 获取精选歌单 */
export const GET_HIGHT_QUALITY_PLAY_LIST = 'PAGES_PLAY_LIST/GET_HIGHT_QUALITY_PLAY_LIST'

interface GetHightQualityPlayListAction {
  type: typeof GET_HIGHT_QUALITY_PLAY_LIST;
  payload: {
    hightQualityPlayList: HightQualityPlayListItem[];
  };
}

export type ActionTypes = GetHightQualityPlayListAction
