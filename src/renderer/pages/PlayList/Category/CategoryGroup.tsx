import React from 'react'

import { CategoryListItem } from 'Api/playList/requestCategoryList'
import ListItem from './CategoryGroupItem'
import styles from './categoryGroup.scss'

interface Props {
  data: {
    name: string;
    items: CategoryListItem[];
  };
}

function CategoryGroup(props: Props): JSX.Element {
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

export default React.memo(CategoryGroup)
