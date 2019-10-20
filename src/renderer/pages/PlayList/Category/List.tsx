import React from 'react'

import { CategoryListItem } from 'Api/playList/requestCategoryList'
import ListItem from './ListItem'
import styles from './list.scss'

interface Props {
  data: {
    name: string;
    items: CategoryListItem[];
  };
}

export default function CategoryList(props: Props): JSX.Element {
  const { data } = props
  return (
    <div className={styles.container}>
      <div className={styles.title}>{ data.name }</div>

      <div className={styles.listItemContainer}>
        {
          data.items.map((element: CategoryListItem): JSX.Element => (
            <ListItem key={element.name} data={element} />
          ))
        }
      </div>
    </div>
  )
}
