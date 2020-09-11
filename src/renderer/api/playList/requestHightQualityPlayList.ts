import { get } from "../http";

interface HighQualityPlayList {
  name: string;
  id: number;
  description: string;
  coverImgUrl: string;
}

interface HighQualityPlayListReturnData {
  playlists: HighQualityPlayList[];
  total?: number;
  more?: boolean;
}

/**
 * 获取精品歌单
 */
export async function requestHighQualityPlayList(): Promise<HighQualityPlayListReturnData> {
  try {
    const config = {
      url: "/top/playlist/highquality",
    };
    const { data } = await get(config);
    const { playlists, code, total, more } = data;

    if (code !== 200) {
      throw new Error("获取列表失败");
    }

    return {
      playlists,
      total,
      more,
    };
  } catch (error) {
    return {
      playlists: [],
    };
  }
}
