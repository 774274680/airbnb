import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHomeGoodPrice,
  getHomeHighScore,
  getHomeDiscount,
  getHomeRecommend,
} from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  async (params, { dispatch, getState }) => {
    getHomeGoodPrice().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScore().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscount().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeRecommend().then((res) => {
      dispatch(changeRecommendInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, action) {
      state.goodPriceInfo = action.payload
    },
    changeHighScoreInfoAction(state, action) {
      state.highScoreInfo = action.payload
    },
    changeDiscountInfoAction(state, action) {
      state.discountInfo = action.payload
    },
    changeRecommendInfoAction(state, action) {
      state.recommendInfo = action.payload
    },
  },
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
} = homeSlice.actions

export default homeSlice.reducer
