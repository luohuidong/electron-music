import React from 'react'
import { useDispatch } from 'react-redux'
import { CategoryListItem } from 'Api/playList/requestCategoryList'
import { thunks as playListThunks } from 'Store/pages/PlayList'

import styles from './listItem.scss'

interface Props {
  data: CategoryListItem;
}

export default function ListItem(props: Props): JSX.Element {
  const { data } = props
  const dispatch = useDispatch()

  function handleClick(): void {
    const params = {
      order: 'hot',
      category: data.name,
      limit: 50,
      offset: 0
    }
    dispatch(playListThunks.thunkSavePlayList(params))
  }

  return (
    <a className={styles.link} onClick={handleClick}>
      {data.name}
    </a>
  )
}
