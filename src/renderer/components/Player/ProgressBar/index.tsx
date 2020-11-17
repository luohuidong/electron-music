import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import { EffectCallBack } from 'Types/index';
import { AppState } from 'Store/index';
import { types as playerTypes } from 'Store/Player';
import styles from './index.module.scss';

function ProgressBar(): JSX.Element {
  const progressBarContainerRef = useRef<HTMLDivElement>(null);

  const [progressBarContainerWidth, setProgressBarContainerWidth] = useState(0);

  useEffect((): EffectCallBack => {
    const progressBarContainer = progressBarContainerRef.current;
    if (progressBarContainer) {
      const progressBarContainerWidth = progressBarContainer.clientWidth;
      setProgressBarContainerWidth(progressBarContainerWidth);
    }
  }, []);

  const { currentTime, duration, percentage } = useSelector(
    ({ player }: AppState): playerTypes.State => player
  );

  function formatNumber(number: number): string | number {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  function formatTime(time = 0): string {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.currentTime}>{formatTime(currentTime)}</div>

      <div
        className={styles.progressBarContainer}
        ref={progressBarContainerRef}
      >
        <div
          className={styles.progressBar}
          style={{
            width: progressBarContainerWidth * percentage,
          }}
        ></div>
      </div>

      <div className={styles.totalTime}>{formatTime(duration)}</div>
    </div>
  );
}

export default React.memo(ProgressBar);
