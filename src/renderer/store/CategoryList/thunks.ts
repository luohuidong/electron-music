import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "Store/index";
import { requestCategoryList } from "Api/playList";
import { saveCategory } from "./actions";

/**
 * 获取精选歌单列表数据
 */
export function thunkSaveCategoryList(): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> {
  return async (dispatch): Promise<void> => {
    try {
      const { all, sub, categories } = await requestCategoryList();
      dispatch(saveCategory(all, sub, categories));
    } catch (error) {
      console.error("thunkSaveCategoryList", error.message);
    }
  };
}
