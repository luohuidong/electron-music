import { get } from '../http'



/** 歌单类型 */
export interface CategoryListItem {
  name: string; // 歌单类型名称
  category: number; // 歌单类型分类
  hot: boolean; // 是否为热门歌单
}

/**
 * 歌单类型的分类
 *
 * 所有的歌单类型都可以分类四类：`
 * 分别为 0：语种；1：风格；2：场景；3：情感；4：主题
 */
export interface CategoryListItemCategory {
  [index: string]: string;
}

export interface CategoryData {
  all: CategoryListItem;
  sub: CategoryListItem[];
  categories: CategoryListItemCategory;
}

/**
 * 获取歌单分类
 */
export async function requestCategoryList(): Promise<CategoryData> {
  try {
    const config = {
      url: '/playlist/catlist',
    }
    const { data } = await get(config)
    const { all, sub, categories, code } = data

    if (code !== 200) {
      throw new Error('获取列表失败')
    }

    return {
      all,
      sub,
      categories
    }
  } catch (error) {
    throw new Error('获取歌单列表失败')
  }
}
