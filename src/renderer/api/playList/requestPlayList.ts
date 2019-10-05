import { get } from '../http'

interface PlayList {
  name: string;
  id: number;
  description: string;
  coverImgUrl: string;
}

interface PlayListReturnData {
  playlists: PlayList[];
  total?: number;
  more?: boolean;
}

/**
 * 获取精品歌单
 * @param order 'new' or 'hot'，分别对应这最新歌单和最热歌单
 * @param category 如 "华语", "古风", "欧美" 等，可从歌单分类接口获取(/playlist/catlist) 中获取
 */
export async function requestPlayList(order = 'hot', category = '全部'): Promise<PlayListReturnData> {
  try {
    const config = {
      url: '/top/playlist',
      params: {
        order,
        category
      }
    }
    const { data } = await get(config)
    const { playlists, code, total, more } = data

    if (code !== 200) {
      throw new Error('获取列表失败')
    }

    return {
      playlists,
      total,
      more
    }
  } catch (error) {
    return {
      playlists: []
    }
  }
}

