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

function Cover(props: Props): JSX.Element {
  const { data } = props
  return (
    <figure className={styles.container}>
      <a>
        <div className={styles.imgContainer}>
          <img src={data.coverImgUrl} alt='' />
        </div>
      </a>

      <figcaption>
        <a>{data.name}</a>
      </figcaption>
    </figure>
  )
}

export default Cover
