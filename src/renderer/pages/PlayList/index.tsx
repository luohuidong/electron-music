import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Store/index'
import { thunks as playListThunks, types as playListTypes } from 'Store/pages/PlayList'
import { thunks as playerThunks } from 'Store/components/Player'

import { Cover } from 'Components/index'

import style from './style.scss'

interface Props {
  playList: playListTypes.SavePlayListItem[];
  thunkSavePlayList: () => void;
  thunkSavePlayList: (playListId: number) => void;
}

function PlayList(props: Props): React.ReactElement {
  useEffect((): void => {
    async function getHightQualityPlayList(): Promise<void> {
      await props.thunkSavePlayList()
    }
    getHightQualityPlayList()
  }, [])

  const { playList } = props

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
      <div className={style.playList}>
        {
          playList.map((element): React.ReactElement => (
            <Cover key={element.id} data={element} onClick={(data): void => { handleClick(data) }} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ playList }: AppState): object => ({
  playList: playList.playList
})

const mapDispatchToProps = {
  thunkSavePlayList: playListThunks.thunkSavePlayList,
  thunkSavePlayList: playerThunks.thunkSavePlayList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
