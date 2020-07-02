import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form'
//custom layout
//Temporarily close --> import CustomLayout from '../containers/Layout'
import Header from './Header'
import { lp_data } from '../shared/lp_data'
import PasswordData from './PasswordData'
import LpDetail from './PassDetailComponent'

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

        const HomePage = () => {
            return (
                <PasswordData lp_data={this.state.lp_data} />
            )
        }

        const LpWithId = ({ match }) => {
            return (
                <LpDetail lp_data={this.state.lp_data.filter((lp_data) =>
                    lp_data.id === parseInt(match.params.lp_data_Id, 10))[0]} />
            )
        }

        return (
            <div className="App">
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/item/:lp_data_Id'
                        component={LpWithId} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )

    }
}
export default Main