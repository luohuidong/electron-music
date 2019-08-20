import React from 'react'

import styles from './style.scss'

interface Data {
  name: string;
  id: number;
  coverImgUrl: string;
}

interface Props {
  data: Data;
}

function Cover(props: Props): React.ReactElement {
  const { data } = props
  return (
    <div className={styles.container}>
      <img src={data.coverImgUrl} />
    </div>
  )
}

export default Cover
