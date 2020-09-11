import { ActionTypes, SAVE_CATEGORIES } from "./types";
import { CategoryListItem, CategoryListItemCategory } from "Api/playList/requestCategoryList";

export function saveCategory(
  all: CategoryListItem,
  sub: CategoryListItem[],
  categories: CategoryListItemCategory
): ActionTypes {
  return {
    type: SAVE_CATEGORIES,
    payload: {
      all,
      sub,
      categories,
    },
  };
}
