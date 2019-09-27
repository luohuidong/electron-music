import { get } from '../http'

interface Artist {
  name: string;
  id: number;
}

/** 专辑 */
interface Album {
  id: number;
  name: string;
}

/** 歌单歌曲数据 */
interface Songs {
  name: string;
  id: number;
  ar: Artist[];
  al: Album;
}

/** 歌单歌曲 id */
interface SongIds {
  id: number;
}

/** 歌单详情数据 */
interface PlayListDetailData {
  tracks: Songs[];
  trackIds: SongIds[];
  id: number; // 歌单 id
  tags: string[]; // 标签
}

/**
 * 获取歌单详情
 * @param playListId 歌单 id
 */
export async function requestPlaylistDetail(playListId: number): Promise<PlayListDetailData> {
  try {
    const config = {
      url: '/playlist/detail',
      params: {
        id: playListId
      }
    }

    const { data } = await get(config)
    const { code, playlist } = data

    if (code !== 200) {
      throw new Error('获取歌单详情失败')
    }

    return playlist
  } catch (error) {
    throw new Error('获取歌单详情失败')
  }
}
