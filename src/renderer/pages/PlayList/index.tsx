import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import style from './style.scss'
import { AppState } from 'Store/index'
import { thunks, types } from 'Store/pages/PlayList'

interface Props {
  hightQualityPlayList: types.HightQualityPlayListItem[];
  thunkGetHightQualityPlayList: typeof thunks.thunkGetHightQualityPlayList;
}

function PlayList(props: Props): React.ReactElement {
  useEffect((): void => {
    props.thunkGetHightQualityPlayList()
  }, [])
  const { hightQualityPlayList } = props

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

const mapStateToProps = ({ playList }: AppState): object => ({
  hightQualityPlayList: playList.hightQualityPlayList
})

const mapDispatchToProps = {
  thunkGetHightQualityPlayList: thunks.thunkGetHightQualityPlayList
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
