import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const SectionV1 = memo((props) => {
  const { sectionData } = props
  return (
    <SectionWrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />
      <SectionRooms roomList={sectionData.list} />
      <SectionFooter />
    </SectionWrapper>
  )
})

SectionV1.propTypes = {
  sectionData: PropTypes.object,
}

export default SectionV1
