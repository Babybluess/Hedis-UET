// import { createSlice} from '@reduxjs/toolkit'

// const saveState = createSlice({
//   name: 'Updated searchBar',
//   initialState: {
//     value: '  '
//   },
//   reducers: {
//     updated: state => {
//       state.value = state.value.charAt(0).toUpperCase + state.value.slice(1,state.value.length - 1).toLowerCase
//     }
//   }
// })

// export const { updated } = saveState.actions
// export default saveState

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchContext: ' ',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updatedSearch: (state, action) => {
      state.searchContext  = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updatedSearch} = searchSlice.actions

export default searchSlice.reducer