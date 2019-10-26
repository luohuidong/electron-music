import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { AppState } from 'Store/index'
import { thunks as playListThunks, types as playListTypes } from 'Store/pages/PlayList'
import { thunks as playerThunks } from 'Store/components/Player'

import { Cover } from 'Components/index'
import Category from './Category'

import style from './style.scss'

function PlayList(): React.ReactElement {
  const dispatch = useDispatch()
  const { playList, playListQueryParams } = useSelector(({ playList }: AppState): playListTypes.State => playList )

  useEffect((): void => {
    dispatch(playListThunks.thunkSavePlayList(playListQueryParams))
  }, [])

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
    dispatch(playerThunks.thunkSavePlayerPlayList(id))
  }

  return (
    <div className={style.container}>
      <Category />

      <div className={style.playList}>
        {
          playList.map((element): React.ReactElement => (
            <Cover
              key={element.id}
              data={element}
              onClick={(data): void => { handleClick(data) }}
              containerClassName={style.cover}
              imgContainerClassName={style.img}
            />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ playList }: AppState): object => ({
  playList: playList.playList
})

export default connect(mapStateToProps)(PlayList)
