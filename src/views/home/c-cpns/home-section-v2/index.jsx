import PropTypes from 'prop-types'
import React, { memo, useState, useCallback, useEffect } from 'react'
import { SectionWrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { sectionData } = props

  const default_name = Object.keys(sectionData.dest_list)[0]

  const [name, setName] = useState(default_name)
  const tabClickHandler = useCallback((item) => {
    setName(item)
  }, [])

  return (
    <SectionWrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      ></SectionHeader>
      <SectionTabs
        tabList={Object.keys(sectionData.dest_list)}
        tabClickHandler={tabClickHandler}
      />
      <SectionRooms
        roomList={sectionData.dest_list[name]}
        itemWidth="33%"
      ></SectionRooms>
      <SectionFooter name={name} />
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  sectionData: PropTypes.object,
}

export default HomeSectionV2
