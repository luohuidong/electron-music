import { State } from './types'

export const state: State = {
  playList: [],
  playListQueryParams: {
    order: 'hot',
    category: '全部歌单',
    limit: 50,
    offset: 0,
  }
}
