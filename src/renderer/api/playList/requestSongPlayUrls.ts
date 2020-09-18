import { get } from "../http";

interface SongPlayUrlData {
  id: string;
  url: string;
}

/**
 * 获取多首歌的播放地址
 * @param songIds 当有多首歌的时候，每首歌的 id 通过 ',' 隔开
 */
export async function requestSongPlayUrls(
  songIds: string
): Promise<SongPlayUrlData[]> {
  try {
    const config = {
      url: "/song/url",
      params: {
        id: songIds,
      },
    };

    const { data } = await get(config);

    if (data.code !== 200) {
      throw new Error("获取歌曲播放地址失败");
    }

    return data.data;
  } catch (error) {
    throw new Error("消息提醒");
  }
}
