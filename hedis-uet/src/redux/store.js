import { configureStore } from '@reduxjs/toolkit'
import { searchSlice } from './reducer'

export const Store = configureStore({
  reducer: searchSlice.reducer
})