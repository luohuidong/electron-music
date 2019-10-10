import React, { useEffect } from 'react'
import classnames from 'classnames'

import { EffectCallBack } from 'Types/index'
import styles from './style.scss'

interface Props {
  className?: string;
  children: JSX.Element;
  handleScroll?: Function;
}

export default function ScrollView(props: Props): JSX.Element {
  const { className } = props
  const containerRef = React.createRef<HTMLDivElement>()

  useEffect((): EffectCallBack => {
    const containerElement = containerRef.current

    function handleScroll(event): void {
      const { target } = event
      const { scrollHeight, scrollTop, clientHeight } = target

      const percentage = (scrollTop + clientHeight) / scrollHeight
      props.handleScroll && props.handleScroll(percentage)
    }

    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll)
    }

    return (): void => {
      if (containerElement) {
        containerElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={classnames(styles.container, className)}
    >
      {props.children}
    </div>
  )
}
