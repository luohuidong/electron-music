import { State } from './types'

export const state: State = {
  playList: [],
  currentSong: {
    id: 0,
    name: '',
    ar: [],
    al: {
      id: 0,
      name: '',
    }
  },
  currentSongIndex: 0,
  percentage: 0,
  playState: false,
  currentTime: 0,
  duration: 0,
}
