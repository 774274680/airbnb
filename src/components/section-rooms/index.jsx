import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
  const { roomList } = props
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} />
      })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
}

export default SectionRooms