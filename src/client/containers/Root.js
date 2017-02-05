import App from '../components/App/'
import React, { Component } from 'react'

export default class Root extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <App>{this.props.children}</App>
  }
}
