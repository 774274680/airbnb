import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPrice } from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  async () => {
    const res = await getHomeGoodPrice()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
  },
})

export default homeSlice.reducer
