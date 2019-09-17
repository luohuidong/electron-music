import { SAVE_PLAY_LIST, PlayListItem, SavePlayListAction } from './types'

export function savePlayList(playList: PlayListItem[]): SavePlayListAction {
  return {
    type: SAVE_PLAY_LIST,
    payload: {
      playList
    },
  }
}
