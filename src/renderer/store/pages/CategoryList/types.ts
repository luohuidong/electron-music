import { CategoryListItem, CategoryListItemCategory } from 'Api/playList/requestCategoryList'

// state type

export interface State {
  all: CategoryListItem;
  sub: CategoryListItem[];
  categories: CategoryListItemCategory;
}

// action type

export const SAVE_CATEGORIES = 'PAGES_CATEGORY_LIST/SAVE_CATEGORIES'

/** 保存歌单类型分类 */
interface SaveCategories {
  type: typeof SAVE_CATEGORIES;
  payload: {
    all: CategoryListItem;
    sub: CategoryListItem[];
    categories: CategoryListItemCategory;
  };
}

export type ActionTypes = SaveCategories
