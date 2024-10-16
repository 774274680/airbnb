import React, { memo } from 'react'

import IconGlobal from '@/assets/svg/icon_global'
import IconProfile from '@/assets/svg/icon_profile'
import IconCollpase from '@/assets/svg/icon_collpase'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile">
        <div className="icon">
          <IconCollpase />
        </div>
        <div className="icon">
          <IconProfile />
        </div>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
