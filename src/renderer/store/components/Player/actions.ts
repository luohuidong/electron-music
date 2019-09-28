import {
  Song,
  SAVE_PLAY_LIST, SavePlayListAction,
  SAVE_CURRENT_SONG, SaveCurrentSongAction,
  SAVE_PERCENTAGE, SavePercentageAction,
  SAVE_PLAY_STATE, SavePlayStateAction,
  SAVE_CURRENT_SONG_INDEX, SaveCurrentSongIndex
} from './types'

/**
 * 保存当前播放器歌曲列表
 * @param playList
 */
export function savePlayList(playList: Song[]): SavePlayListAction {
  return {
    type: SAVE_PLAY_LIST,
    payload: {
      playList
    },
  }
}

/**
 * 保存当前正在播放的歌曲
 * @param song
 */
export function saveCurrentSong(song: Song): SaveCurrentSongAction {
  return {
    type: SAVE_CURRENT_SONG,
    payload: {
      currentSong: song
    }
  }
}

/**
 * 保存当前正在播放的歌曲对应在播放列表中的索引
 * @param index
 */
export function saveCurrentSongIndex(index: number): SaveCurrentSongIndex {
  return {
    type: SAVE_CURRENT_SONG_INDEX,
    payload: {
      currentSongIndex: index
    }
  }
}

/**
 * 保存歌曲播放进度百分比
 * @param percentage 歌曲播放进度百分比
 */
export function savePercentage(percentage: number): SavePercentageAction {
  return {
    type: SAVE_PERCENTAGE,
    payload: {
      percentage
    }
  }
}

/**
 * 保存播放器播放状态
 * @param playState true 表示播放器为播放状态，false 表示暂停状态
 */
export function savePlayState(playState: boolean): SavePlayStateAction {
  return {
    type: SAVE_PLAY_STATE,
    payload: {
      playState
    }
  }
}
