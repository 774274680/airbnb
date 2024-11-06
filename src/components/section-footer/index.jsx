import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const SectionFooter = memo((props) => {
  const { name } = props
  let message = '显示全部'
  if (name) {
    message = `显示更多${name}房源`
  }
  return (
    <FooterWrapper color={name ? '#007d85' : '#000'}>
      <div className="show-more">
        <span>{message}</span>
        <IconArrowRight />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
