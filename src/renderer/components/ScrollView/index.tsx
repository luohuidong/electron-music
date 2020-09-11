import React, { useRef } from 'react'
import classnames from 'classnames'

import styles from './index.module.scss'

interface Props {
  className?: string;
  children: JSX.Element;
  handleScroll?: Function;
}

export default function ScrollView(props: Props): JSX.Element {
  const { className } = props
  const containerRef = useRef<HTMLDivElement>(null)

  const hansleScrollRef = useRef((event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { currentTarget } = event
    if (!event) {
      return
    }

    const { scrollHeight, scrollTop, clientHeight } = currentTarget

    const percentage = (scrollTop + clientHeight) / scrollHeight
    props.handleScroll && props.handleScroll(percentage)
  })

  return (
    <div
      ref={containerRef}
      className={classnames(styles.container, className)}
      onScroll={(event) => hansleScrollRef.current(event)}
    >
      {props.children}
    </div>
  )
}
