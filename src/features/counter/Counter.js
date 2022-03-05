/**
 * 4. Use the React-Redux useSelector/useDispatch hooks in React components
 * Now we can use the React-Redux hooks to let React components
 * interact with the Redux store. We can read data from the store
 * with useSelector, and dispatch actions using useDispatch.
 * Create a src/features/counter/Counter.js file with a
 * <Counter> component inside, then import that component
 * into App.js and render it inside of <App>.
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export function Counter () {
  // Read data from the store with the useSelector hook
  const count = useSelector(state => state.counter.value)
  // Get the dispatch function with the useDispatch hook, and dispatch actions as needed
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ marginLeft: '20px', marginRight: '20px' }}>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
