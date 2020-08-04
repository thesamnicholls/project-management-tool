import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'
import App from './js/App'
import rootReducer from './js/store/reducers/rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
