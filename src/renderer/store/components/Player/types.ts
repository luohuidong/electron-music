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

export interface Song {
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


export const SAVE_CURRENT_SONG = 'COMPONENTS_PLAYER/SAVE_CURRENT_SONG'
export interface SaveCurrentSongAction {
  type: typeof SAVE_CURRENT_SONG;
  payload: {
    currentSong: Song;
  };
}


export const SAVE_SONG_PLAY_URLS = 'COMPONENTS_PLAYER/SAVE_SONG_PLAY_URLS'
interface SongPlayUrlData {
  id: string;
  url: string;
}
export interface SaveSongPlayUrlsAction {
  type: typeof SAVE_SONG_PLAY_URLS;
  payload: {
    songPlayUrls: SongPlayUrlData[];
  };
}

export type ActionTypes = SavePlayListAction | SaveCurrentSongAction
