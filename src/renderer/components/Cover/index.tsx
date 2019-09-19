/**
 * 歌单封面组件
 */

import React from 'react'

import styles from './style.scss'

interface Data {
  name: string; // 歌单名称
  id: number; // 歌单 id
  coverImgUrl: string; // 歌单封面图片 url
}

interface Props {
  data: Data;
  onClick?: (data: Data) => void;
}

function Cover(props: Props): JSX.Element {
  const { data } = props

  function handleClick(data: Data): void {
    const { onClick } = props
    onClick && onClick(data)
  }

  return (
    <figure className={styles.container}>
      <a onClick={(): void => { handleClick(data) }}>
        <div className={styles.imgContainer}>
          <img src={data.coverImgUrl} alt='' />
        </div>
      </a>

      <figcaption>
        <a onClick={(): void => { handleClick(data) }}>{data.name}</a>
      </figcaption>
    </figure>
  )
}

export default Cover
