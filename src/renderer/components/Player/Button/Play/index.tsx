import React, { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'Store/index';
import {
  actions as playerActions,
  types as playerTypes,
} from 'Store/Player/index';

import playIcon from './play.svg';
import pauseIcon from './pause.svg';
import styles from './index.module.scss';

function Play(): JSX.Element {
  const dispatch = useDispatch();

  const playList = useSelector(
    ({ player }: AppState): playerTypes.Song[] => player.playList
  );
  const playState = useSelector(
    ({ player }: AppState): boolean => player.playState
  );

  function handleClick(e: MouseEvent): void {
    e.stopPropagation();
    if (playList.length === 0) {
      return;
    }
    dispatch(playerActions.savePlayState(!playState));
  }

  return (
    <img
      src={playState ? pauseIcon : playIcon}
      className={styles.img}
      alt={playState ? '暂停' : '播放'}
      title={playState ? '暂停' : '播放'}
      onClick={handleClick}
    />
  );
}

export default React.memo(Play);
