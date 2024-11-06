import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1/index'
import HomeSectionV2 from './c-cpns/home-section-v2'
import isEmptyObject from '@/utils/is-empty-object'

const home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector((state) => {
      return {
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
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
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 sectionData={goodPriceInfo}></HomeSectionV1>
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 sectionData={highScoreInfo}></HomeSectionV1>
        )}
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 sectionData={discountInfo}></HomeSectionV2>
        )}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 sectionData={recommendInfo}></HomeSectionV2>
        )}
      </div>
    </HomeWrapper>
  )
})

export default home
