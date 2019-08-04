import React from 'react'

import style from './style.scss'

function PlayList(): React.ReactElement {
  return (
    <div className={style.container}>
      <div>
        热门标签
      </div>

      <div>
        歌单
      </div>
    </div>
  )
}

export default PlayList
