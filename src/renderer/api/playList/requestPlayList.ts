import { get } from "../http";

interface PlayListQueryParams {
  order?: string; // 'new' or 'hot'，分别对应这最新歌单和最热歌单
  category?: string; // 歌单分类，如 "华语", "古风", "欧美" 等，可从歌单分类接口获取(/playlist/catlist) 中获取
  limit?: number; // 结果返回数量，如果不传默认为 50
  offset?: number; // 偏移量，用于分页，如果不传默认为 0
}

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
 * @param order
 * @param category
 */
export async function requestPlayList(params: PlayListQueryParams): Promise<PlayListReturnData> {
  const { order = "hot", category = "全部歌单", limit = 50, offset = 0 } = params;

  try {
    const config = {
      url: "/top/playlist",
      params: {
        order,
        cat: category,
        limit,
        offset,
      },
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
