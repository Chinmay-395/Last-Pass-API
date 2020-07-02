import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form'
//custom layout
import CustomLayout from '../containers/Layout'
import Header from './Header'
import { lp_data } from '../shared/lp_data'
import PasswordData from './PasswordData'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lp_data: lp_data,
            isLoading: false,
            errMess: false

        };
    }
    render() {
        console.log(this.state.lp_data)
        return (
            <div className="App">
                <Header />
                <PasswordData lp_data={this.state.lp_data} />
            </div>
        )

    }
}
export default Main