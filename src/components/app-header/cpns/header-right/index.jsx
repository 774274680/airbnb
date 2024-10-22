import React, { memo, useEffect, useState } from 'react'

import IconGlobal from '@/assets/svg/icon_global'
import IconProfile from '@/assets/svg/icon_profile'
import IconCollpase from '@/assets/svg/icon_collpase'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [isShowMenu, setMenu] = useState(false)
  const menuClick = () => {
    setMenu(!isShowMenu)
  }
  useEffect(() => {
    const clickHandle = () => {
      setMenu(false)
    }
    window.addEventListener('click', clickHandle, true)
    return () => {
      window.removeEventListener('click', clickHandle)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={menuClick}>
        <div className="icon-list">
          <div className="icon">
            <IconCollpase />
          </div>
          <div className="icon">
            <IconProfile />
          </div>
        </div>
        {isShowMenu && (
          <div className="menu-list">
            <div className="menu-list-item">注册</div>
            <div className="menu-list-item">登录</div>
            <div className="menu-list-item border-bottom">历史浏览记录</div>
            <div className="menu-list-item">帮助中心</div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
