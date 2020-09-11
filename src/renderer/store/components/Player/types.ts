// state type

/** 歌手 */
interface Artist {
  name: string;
  id: number;
}

/** 专辑 */
interface Album {
  id: number;
  name: string;
}

export interface Song {
  id: number;
  name: string;
  ar: Artist[];
  al: Album;
}

export interface State {
  /** 歌单歌曲列表 */
  playList: Song[];
  /** 当前在播放的歌曲 */
  currentSong: Song;
  /** 当前播放的歌曲在歌曲列表中对应的索引 */
  currentSongIndex: number;
  /** 当前播放进度百分比 */
  percentage: number;
  /** 播放器播放状态 */
  playState: boolean;
  /** 播放器当前播放时间（秒） */
  currentTime: number;
  /** 播放器播放总时长 */
  duration: number;
}

// action type

const typePrefix = "COMPONENTS_PLAYER";

export const SAVE_PLAY_LIST = `${typePrefix}/SAVE_PLAY_LIST_DETAIL`;
export interface SavePlayListAction {
  type: typeof SAVE_PLAY_LIST;
  payload: {
    playList: Song[];
  };
}

export const SAVE_CURRENT_SONG = `${typePrefix}/SAVE_CURRENT_SONG`;
export interface SaveCurrentSongAction {
  type: typeof SAVE_CURRENT_SONG;
  payload: {
    currentSong: Song;
  };
}

export const SAVE_CURRENT_SONG_INDEX = `${typePrefix}/SAVE_CURRENT_SONG_INDEX`;
export interface SaveCurrentSongIndex {
  type: typeof SAVE_CURRENT_SONG_INDEX;
  payload: {
    currentSongIndex: number;
  };
}

export const SAVE_PERCENTAGE = `${typePrefix}COMPONENTS_PLAYER/SAVE_PERCENTAGE`;
export interface SavePercentageAction {
  type: typeof SAVE_PERCENTAGE;
  payload: {
    percentage: number;
  };
}

export const SAVE_PLAY_STATE = `${typePrefix}/SAVE_PLAY_STATE`;
export interface SavePlayStateAction {
  type: typeof SAVE_PLAY_STATE;
  payload: {
    playState: boolean;
  };
}

export const SAVE_PLAYER_TIME = `${typePrefix}/SAVE_PLAYER_TIME`;
export interface SaveCurrentTimeAction {
  type: typeof SAVE_PLAYER_TIME;
  payload: {
    currentTime: number;
    duration: number;
  };
}

export type ActionTypes =
  | SavePlayListAction
  | SaveCurrentSongAction
  | SavePercentageAction
  | SavePlayStateAction
  | SaveCurrentSongIndex
  | SaveCurrentTimeAction;
