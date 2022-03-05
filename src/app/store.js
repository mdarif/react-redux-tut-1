/**
 * 1. Create a Redux store with configureStore
 * This creates a Redux store, and also automatically configure
 * the Redux DevTools extension so that you can inspect the
 * store while developing.
 */

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
