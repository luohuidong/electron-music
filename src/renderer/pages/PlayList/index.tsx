import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Store/index'
import { thunks, types } from 'Store/pages/PlayList'

import { Cover } from 'Components/index'

import style from './style.scss'

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

      <div className={style.playList}>
        {
          hightQualityPlayList.map((element): React.ReactElement => (
            <Cover key={element.id} data={element} />
          ))
        }
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
