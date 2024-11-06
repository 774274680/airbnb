import PropTypes from 'prop-types'
import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabList, tabClickHandler } = props
  const [current_index, setCurrentIndex] = useState(0)

  const tabClick = (item, index) => {
    setCurrentIndex(index)
    tabClickHandler(item, index)
  }

  return (
    <TabsWrapper>
      {tabList?.map((item, index) => {
        return (
          <div
            className={classNames(
              'tab-item',
              current_index == index ? 'active' : ''
            )}
            key={index}
            onClick={() => tabClick(item, index)}
          >
            {item}
          </div>
        )
      })}
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabList: PropTypes.array,
}

export default SectionTabs
