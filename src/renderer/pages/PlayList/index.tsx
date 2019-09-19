import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Store/index'
import { thunks as playListThunks, types as playListTypes } from 'Store/pages/PlayList'
import { thunks as playerThunks } from 'Store/components/Player'

import { Cover } from 'Components/index'

import style from './style.scss'

interface Props {
  hightQualityPlayList: playListTypes.HightQualityPlayListItem[];
  thunkGetHightQualityPlayList: () => void;
  thunkSavePlayList: (playListId: number) => void;
}

function PlayList(props: Props): React.ReactElement {
  useEffect((): void => {
    props.thunkGetHightQualityPlayList()
  }, [])
  
  const { hightQualityPlayList } = props

  interface Data {
    name: string; // 歌单名称
    id: number; // 歌单 id
    coverImgUrl: string; // 歌单封面图片 url
  }

  /**
   * 获取歌单对应的歌曲列表
   * @param data 
   */
  function handleClick(data: Data): void {
    const { id } = data
    props.thunkSavePlayList(id)
  }

  return (
    <div className={style.container}>
      <div>
        热门标签
      </div>

      <div className={style.playList}>
        {
          hightQualityPlayList.map((element): React.ReactElement => (
            <Cover key={element.id} data={element} onClick={(data): void => { handleClick(data) }} />
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
  thunkGetHightQualityPlayList: playListThunks.thunkGetHightQualityPlayList,
  thunkSavePlayList: playerThunks.thunkSavePlayList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
