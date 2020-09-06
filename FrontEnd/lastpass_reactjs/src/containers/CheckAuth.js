import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import { fetchLpData } from '../redux/ActionCreators'

class CheckAuth extends Component {
  componentDidMount() {
    this.props.fetchLpData()
  }
  render() {
    return (
      <div>
        <p>Check auth props</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lp_data: state.lp_data,
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLpData: () => dispatch(fetchLpData())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckAuth));