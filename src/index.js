/**
 * 2. Provide the Redux store to the React application components
 * Once the store is created, we can make it available to our React components
 * by putting a React-Redux <Provider> around our application in src/index.js.
 * Import the Redux store we just created, put a <Provider> around your <App>,
 * and pass the store as a prop:
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* Put a React-Redux <Provider> component around your <App /> */}
    {/* Pass the Redux store as <Provider store={store}> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
