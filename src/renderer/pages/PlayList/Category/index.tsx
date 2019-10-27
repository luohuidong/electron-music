import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'Store/index'
import { types as playListTypes } from 'Store/pages/PlayList'
import styles from './style.scss'
import arrowDownIcon from './arrowDown.svg'

import { Dropdown } from 'Components/index'
import CategoryGroups from './CategoryGroups'

function Category(): JSX.Element {
  const playListQueryParams = useSelector(
    ({ playList }: AppState): playListTypes.PlayListQueryParams => playList.playListQueryParams
  )

  return (
    <Dropdown overLay={<CategoryGroups />}>
      <div className={styles.button}>
        <span>{playListQueryParams.category}</span>
        <img className={styles.img} src={arrowDownIcon} />
      </div>
    </Dropdown>
  )
}

export default Category
