import React, { useState, MouseEvent } from "react";

import normalVolumnIcon from "./volume-normal.svg";
import muteVolumnIcon from "./volume-mute.svg";

import { Slider } from "Components/index";

import styles from "./index.module.scss";

function Volume(): JSX.Element {
  // 是否静音
  const [isMute, setIsMute] = useState(false);

  function handleIconClick(e: MouseEvent): void {
    e.stopPropagation();

    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={isMute ? muteVolumnIcon : normalVolumnIcon}
        onClick={handleIconClick}
      />

      <Slider />
    </div>
  );
}

export default React.memo(Volume);
