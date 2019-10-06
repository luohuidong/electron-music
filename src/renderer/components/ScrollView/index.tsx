import React from 'react'
import classnames from 'classnames'

import styles from './style.scss'

interface Props {
  className?: string;
  children: JSX.Element;
}

export default function ScrollView(props: Props): JSX.Element {
  const { className } = props

  return (
    <div className={classnames(styles.container, className)}>
      {props.children}
    </div>
  )
}
