import { get } from '../http'

interface HotCategoryItem {
  id: number;
  name: string;
}

export async function requestHotCategoryList(): Promise<HotCategoryItem[]> {
  try {
    const config = {
      url: '/playlist/hot'
    }

    const { data } = await get(config)
    const { tags, code } = data

    if (code !== 200) {
      throw new Error('查询热门歌单分类失败')
    }

    return tags
  } catch (error) {
    throw new Error(error.message)
  }
}
