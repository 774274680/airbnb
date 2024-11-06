import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

import Rating from '@mui/material/Rating'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  return (
    <ItemWrapper width={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div
          className="verify_info"
          style={{ color: itemData.verify_info.text_color }}
        >
          {itemData.verify_info.messages.join('·')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="others">
          {/* <span className="start">星星</span> */}
          {/* sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }} */}
          <Rating
            name="read-only"
            value={2}
            readOnly
            size="small"
            sx={{ fontSize: 12, color: '#f00', marginRight: '2px' }}
          />
          <span className="bottom-info">
            {itemData.reviews_count}-{itemData.bottom_info?.content}
          </span>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem
