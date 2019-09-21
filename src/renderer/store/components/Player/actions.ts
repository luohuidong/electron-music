import { 
  ActionTypes,
  PlayListItem, Song, 
  SAVE_PLAY_LIST, SAVE_CURRENT_SONG 
} from './types'

/**
 * 保存当前播放器歌曲列表
 * @param playList
 */
export function savePlayList(playList: PlayListItem[]): ActionTypes {
  return {
    type: SAVE_PLAY_LIST,
    payload: {
      playList
    },
  }
}

export function saveSongPlayUrls() {
  
}

/**
 * 保存当前正在播放的歌曲
 * @param song 
 */
export function saveCurrentSong(song: Song): ActionTypes {
  return {
    type: SAVE_CURRENT_SONG,
    payload: {
      currentSong: song
    }
  }
}
