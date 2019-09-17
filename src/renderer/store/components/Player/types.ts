// state type

/** 歌单歌曲数据 */
export interface PlayListItem {
  name: string;
  id: number;
}

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

interface Song {
  id: number;
  name: string;
  ar: Artist[];
  al: Album;
}

interface SongUrl {
  id: string;
  url: string;
}

export interface State {
  playList: PlayListItem[]; // 歌单歌曲列表
  currentSong: Song; // 当前在播放的歌曲
  songsUrl: SongUrl[]; // 歌曲对应的 url
}

// action type

export const SAVE_PLAY_LIST = 'COMPONENTS_PLAYER/SAVE_PLAY_LIST_DETAIL'

export interface SavePlayListAction {
  type: typeof SAVE_PLAY_LIST;
  payload: {
    playList: PlayListItem[];
  };
}

export type ActionTypes = SavePlayListAction
