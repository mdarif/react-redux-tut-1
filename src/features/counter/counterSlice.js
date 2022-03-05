/**
 * 3. Create a Redux "slice" reducer with createSlice
 * Creating a slice requires a string name to identify the slice,
 * an initial state value, and one or more reducer functions to
 * define how the state can be updated. Once a slice is created,
 * we can export the generated Redux action creators and the
 * reducer function for the whole slice.
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

// Call createSlice with a string name, an initial state, and named reducer functions
/**
 * Internally, it uses createAction and createReducer [VERY IMPORTANT]],
 * so you may also use Immer to write "mutating" immutable updates:
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Export the generated slice reducer and action creators
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
