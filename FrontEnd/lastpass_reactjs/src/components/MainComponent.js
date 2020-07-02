import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form'
//custom layout
import CustomLayout from '../containers/Layout'
import Header from './Header'


class Main extends Component {
    render() {
        return (
            <div className="App">
                <Header />
            </div>
        )

    }
}
export default Main