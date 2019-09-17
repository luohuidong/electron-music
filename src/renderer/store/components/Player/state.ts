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
  songsUrl: []
}
