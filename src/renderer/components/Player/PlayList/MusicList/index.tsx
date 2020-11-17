import React from 'react';
import { useSelector } from 'react-redux';

import { ScrollView } from 'Components/index';
import MusicListItem from '../MusicListItem';

import { AppState } from 'Store/index';
import { types as playerTypes } from 'Store/Player';
import styles from './index.module.scss';

function MusicList(): JSX.Element {
  const playList = useSelector(
    ({ player }: AppState): playerTypes.Song[] => player.playList
  );

  return (
    <div className={styles.container}>
      <ScrollView className={styles.scrollView}>
        <>
          {playList.map(
            (element): JSX.Element => (
              <MusicListItem key={element.id} data={element} />
            )
          )}
        </>
      </ScrollView>
    </div>
  );
}

export default React.memo(MusicList);
