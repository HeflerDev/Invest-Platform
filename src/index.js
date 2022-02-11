import ReactDOM from 'react-dom'
import React from 'react'
import App from './views/App'
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
