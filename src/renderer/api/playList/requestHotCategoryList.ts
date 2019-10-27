import { get } from '../http'

interface HotCategory {
  name: string;
}

export async function requestHotCategoryList(): Promise<HotCategory> {
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
