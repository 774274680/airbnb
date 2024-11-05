import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import SectionHeader from '@/components/section-header'
// import RoomItem from '@/components/room-item'
import SectionRooms from '@/components/section-rooms'

const home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="container">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          {/* <div className="room-list">
            {goodPriceInfo.list?.slice(0, 8).map((item) => {
              return (
                <div className="room-list-item" key={item.id}>
                  <RoomItem itemData={item} />
                </div>
              )
            })}
          </div> */}
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default home
