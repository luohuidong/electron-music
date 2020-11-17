import React, { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'Store/index';
import { types as playerTypes, actions as playerActions } from 'Store/Player';

import backIcon from './back.svg';
import styles from './index.module.scss';

function Back(): JSX.Element {
  const dispatch = useDispatch();

  const playList = useSelector(
    ({ player }: AppState): playerTypes.Song[] => player.playList
  );
  const currentSongIndex = useSelector(
    ({ player }: AppState): number => player.currentSongIndex
  );

  function handleClick(e: MouseEvent): void {
    e.stopPropagation();

    const length = playList.length;

    if (length === 0) {
      return;
    }

    /** 前一首歌在歌曲列表中的索引 */
    let previousSongIndex = currentSongIndex - 1;

    if (previousSongIndex < 0) {
      previousSongIndex = length - 1;
    }

    dispatch(playerActions.saveCurrentSongIndex(previousSongIndex));
    dispatch(playerActions.saveCurrentSong(playList[previousSongIndex]));
  }

  return (
    <img
      className={styles.img}
      src={backIcon}
      alt='上一首歌'
      title='上一首歌'
      onClick={handleClick}
    />
  );
}

export default React.memo(Back);
