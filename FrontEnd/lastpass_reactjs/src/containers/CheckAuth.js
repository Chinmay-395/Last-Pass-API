import React, { Component } from 'react'
import { connect } from "react-redux";

class CheckAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false
    }
  }
  componentDidMount() {
    console.log("The Props", this.props)
    console.log("The state before", this.state)
    if (this.props.auth.token !== null && this.props.auth.token !== undefined) {
      this.setState((prevState) => {
        prevState.isAuthenticated = true
      })
    }

  }
  render() {
    console.log("The state in render", this.state)
    console.log("The Props in render", this.props)
    return (
      <div>
        <h1>
          This will be made a common function to check the state
          to see if the user is isAuthenticated
        </h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // lp_data: state.lp_data,
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(CheckAuth)