import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { requestHotCategoryList } from 'Api/playList'
import { thunks as playListThunks } from 'Store/pages/PlayList'
import styles from './hotCategory.scss'

function HotCategory(): JSX.Element {
  const dispatch = useDispatch()

  interface HotCategoryItem {
    id: number;
    name: string;
  }
  const [hotCategories, setHotCategories] = useState<HotCategoryItem[]>([])

  useEffect((): void => {
    async function handleHotCategoryList(): Promise<void> {
      const hotCategoryListData = await requestHotCategoryList()
      setHotCategories(hotCategoryListData)
    }
    handleHotCategoryList()
  }, [])

  function handleClick(data: HotCategoryItem): void {
    console.log('a');

    const params = {
      order: 'new',
      category: data.name,
      limit: 50,
      offset: 0
    }
    dispatch(playListThunks.thunkSavePlayList(params))
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>热门歌单分类：</span>

      <div style={{ display: 'flex' }}>
        {
          hotCategories.map((element, index): JSX.Element => (
            <div key={element.id}>
              <span className={styles.categoryItem} onClick={(e): void => {
                e.stopPropagation()
                handleClick(element)
              }}>
                {element.name}
              </span>

              { index + 1 < hotCategories.length ? <span className={styles.divider} /> : null }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(HotCategory)
