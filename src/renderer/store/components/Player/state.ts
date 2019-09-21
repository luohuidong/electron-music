import { State } from './types'

export const state: State = {
  playList: [], // 播放器歌曲列表
  currentSong: {
    id: 0,
    name: '',
    ar: [],
    al: {
      id: 0,
      name: '',
    }
  },
  songsUrl: []
}
