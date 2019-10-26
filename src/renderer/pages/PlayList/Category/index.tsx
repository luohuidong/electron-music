import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from 'Store/index'
import { EffectCallBack } from 'Types/index'
import { types as categoryListTypes } from 'Store/pages/CategoryList'
import { thunks as categoryListThunks } from 'Store/pages/CategoryList'
import { CategoryListItem, CategoryData } from 'Api/playList/requestCategoryList'

import List from './List'

export default function Category(): JSX.Element {
  const dispatch = useDispatch()
  const { all, sub, categories } = useSelector(({ categoryList }: AppState): categoryListTypes.State => categoryList)

  useEffect((): EffectCallBack => {
    dispatch(categoryListThunks.thunkSaveCategoryList())
  }, [])

  interface GroupedCategoryItem {
    name: string;
    items: CategoryListItem[];
  }
  interface DataGroupedByCategory {
    [index: string]: GroupedCategoryItem;
  }
  const [categoryListData, setCategoryListData] = useState<DataGroupedByCategory>({})

  useEffect((): EffectCallBack => {
    /**
     * 对歌单分类进行分组
     * @param categoryData
     */
    function groupByCategory(categoryData: CategoryData): DataGroupedByCategory {
      const { all, sub, categories } = categoryData

      let data: DataGroupedByCategory = {
        all: {
          name: '全部',
          items: [all]
        },
      }

      Object.keys(categories).forEach((key): void => {
        data[key] = {
          name: categories[key],
          items: []
        }
      })

      sub.forEach((element): void => {
        data[element.category].items.push(element)
      })

      return data
    }

    const categoryListData = groupByCategory({ all, sub, categories })
    setCategoryListData(categoryListData)
  }, [all, sub, categories])

  const keys = Object.keys(categoryListData)

  return (
    <div style={{ width: 1080, overflow: 'hidden' }}>
      {
        keys.map((key: string): JSX.Element => <List key={key} data={categoryListData[key]} />)
      }
    </div>
  )
}