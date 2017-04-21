import App from '../components/App/'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Root extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return <App>{this.props.children}</App>
  }
}


function mapStateToProps(state) {
  return {
    app: state.app
  }
}


export default connect(mapStateToProps)(Root)
