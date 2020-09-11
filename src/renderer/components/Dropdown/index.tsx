import React, { useState, MouseEvent, useRef } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

interface Props {
  children: JSX.Element;
  placement: string; // bottomLeft, bottomCenter, bottomRight, topLeft, topCenter, topRight
  overLay: JSX.Element;
  overLayStyle?: object;
  style?: object;
  className?: string;
}

export default function Dropdown(props: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const [showOverLay, setShowOverLay] = useState(false);

  function handleClick(e: MouseEvent): void {
    e.stopPropagation();

    const container = containerRef.current;

    if (!container) return;

    if (showOverLay) {
      container.blur();
      setShowOverLay(false);
    } else {
      container.focus();
      setShowOverLay(true);
    }
  }

  function handleBlur(): void {
    setShowOverLay(false);
  }

  function handleDropdownClick(e: MouseEvent): void {
    e.stopPropagation();

    setShowOverLay(false);
  }

  const dropDownClassName = classnames([
    styles.overLay,
    { [styles.show]: showOverLay },
    { [styles.hidden]: !showOverLay },
    styles[props.placement],
  ]);

  return (
    <div
      className={classnames(styles.container, props.className)}
      onClick={handleClick}
      onBlur={handleBlur}
      style={props.style}
      ref={containerRef}
      tabIndex={-1}
    >
      {props.children}

      <div className={dropDownClassName} onClick={handleDropdownClick} style={props.overLayStyle}>
        {props.overLay}
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  placement: "bottomLeft",
};
