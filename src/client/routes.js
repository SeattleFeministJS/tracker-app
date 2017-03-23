import React from 'react'
import { Route } from 'react-router-dom'
import Root from './containers/Root'

export default function getRoutes(store) {
  return (
    <Route exact path="/" component={Root}>

    </Route>
  )
}
