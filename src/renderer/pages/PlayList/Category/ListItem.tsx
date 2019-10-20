import React from 'react'

import { CategoryListItem } from 'Api/playList/requestCategoryList'

import styles from './listItem.scss'

interface Props {
  data: CategoryListItem;
}

export default function ListItem(props: Props): JSX.Element {
  const { data } = props

  return (
    <a className={styles.link}>
      {data.name}
    </a>
  )
}
