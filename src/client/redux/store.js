import { createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers/root'

const applyMiddleware = require('redux').applyMiddleware

export default function configureStore(initialState, history) {
  let middleware = [
    routerMiddleware(history)
  ]

  if(__DEVELOPMENT__) {
    if(module.hot){
      module.hot.accept('./reducers/root', () => {
        store.replaceReducer(require('./reducers/root'));
      })
    }
  }

  const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

  return store

}
