import {
  ActionTypes,
  PlayListItem, Song, SongPlayUrlData,
  SAVE_PLAY_LIST, SAVE_CURRENT_SONG, SAVE_SONG_PLAY_URLS,
  SAVE_SONG_IDS
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

export function saveSongIds(songIds: number[]): ActionTypes {
  return {
    type: SAVE_SONG_IDS,
    payload: {
      songIds
    }
  }
}

/**
 * 保存歌曲的播放地址
 * @param songPlayUrls
 */
export function saveSongPlayUrls(songPlayUrls: SongPlayUrlData[]): ActionTypes {
  return {
    type: SAVE_SONG_PLAY_URLS,
    payload: {
      songPlayUrls,
    }
  }
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
