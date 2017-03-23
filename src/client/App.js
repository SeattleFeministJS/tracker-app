import configureStore from './redux/store'
import getRoutes from './routes'
import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'

const browserHistory = createBrowserHistory()
const store = configureStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const routes  = getRoutes(store)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
