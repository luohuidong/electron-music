import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'Store/index';
import { types as playListTypes } from 'Store/PlayList';

import styles from './index.module.scss';
import arrowDownIcon from './arrowDown.svg';

import { Dropdown } from 'Components/index';
import CategoryGroups from './CategoryGroups';
import HotCategory from './HotCategory';

function Category(): JSX.Element {
  const playListQueryParams = useSelector(
    ({ playList }: AppState): playListTypes.PlayListQueryParams =>
      playList.playListQueryParams
  );

  return (
    <React.Fragment>
      <Dropdown
        overLay={<CategoryGroups />}
        style={{
          display: 'inline-block',
        }}
      >
        <div className={styles.button}>
          <span>{playListQueryParams.category}</span>
          <img className={styles.img} src={arrowDownIcon} />
        </div>
      </Dropdown>

      <HotCategory />
    </React.Fragment>
  );
}

export default Category;
