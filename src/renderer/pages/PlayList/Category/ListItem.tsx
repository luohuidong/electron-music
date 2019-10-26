import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

import { CategoryListItem } from 'Api/playList/requestCategoryList'
import { thunks as playListThunks, types as playListTypes } from 'Store/pages/PlayList'
import { AppState } from 'Store/index'

import styles from './listItem.scss'

interface Props {
  data: CategoryListItem;
}

export default function ListItem(props: Props): JSX.Element {
  const { data } = props
  const dispatch = useDispatch()

  const { playListQueryParams } = useSelector(({ playList }: AppState): playListTypes.State => playList)

  function handleClick(): void {
    const params = {
      order: 'hot',
      category: data.name,
      limit: 50,
      offset: 0
    }
    dispatch(playListThunks.thunkSavePlayList(params))
  }

  const linkProps = {
    className: classnames(styles.link, {
      [styles.selected]: playListQueryParams.category === data.name }
    ),
    onClick: handleClick,
  }

  return (
    <a {...linkProps}>
      {data.name}
    </a>
  )
}
