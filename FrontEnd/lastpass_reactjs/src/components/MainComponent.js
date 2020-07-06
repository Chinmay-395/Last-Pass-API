import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form'
//custom layout
//Temporarily close --> import CustomLayout from '../containers/Layout'
import Header from './HeaderComponent'
// import Layout from '../containers/Layout'
import PasswordData from './PasswordData'
import LpDetail from './PassDetailComponent'
import { fetchLpData, authLogin, logout, authCheckState, updateLpData } from '../redux/ActionCreators'


const mapStateToProps = state => {
    return {
        lp_data: state.lp_data,
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => ({
    updateLpData: (id, name_of_website, url_of_website, username_for_website,
        password_for_website, notes) => {
        dispatch(updateLpData(id, name_of_website, url_of_website, username_for_website,
            password_for_website, notes))
    },
    fetchLpData: () => { dispatch(fetchLpData()) },
    authLogin: (username, password) => {
        dispatch(authLogin(username, password))
    },
    logout: () => { dispatch(logout()) },
    authCheckState: () => { dispatch(authCheckState()) },

})

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         componentToggler: false
    //     }
    //     // this.toggleChangeState = this.toggleChangeState.bind(this);
    // }
    componentDidMount() {
        this.props.fetchLpData();
        console.log("check to see if runs after AUTH_LOGOUT")
    }
    componentDidUpdate() {
        console.log("Calling from <componentDidUpdate> inside MainComponent ")
        if (this.props.auth.token !== null && this.props.auth.token !== undefined) {
            // this.props.fetchLpData();
            console.log("The prop value exist right now", this.props)

        } else if (this.props.auth.token === null && this.props.lp_data.lp_data.length > 0) {
            console.log("Ran the If Condition")
            // this.props.fetchLpData();
        }
        else {
            console.log("Cannot fetch items")
            console.log("Lenght", this.props.lp_data.lp_data.length)
            // console.log("My state when component updates", this.state)
            console.log("My props when component updates", this.props)
        }
    }

    render() {
        if (this.props.auth.token !== null) {
            const LpWithId = ({ match }) => {
                return (
                    <LpDetail lp_data={this.props.lp_data.lp_data.filter((lp_data) =>
                        lp_data.id === parseInt(match.params.lp_data_Id, 10))[0]}
                        auth={this.props.auth}
                        //From here I should send the dispatch method for update/delete
                        update={this.props.updateLpData}
                    />
                )
            }
            return (
                <div className="App">
                    <Header
                        auth={this.props.auth}
                        authLogin={this.props.authLogin}
                        logout={this.props.logout}
                    />
                    <Switch>
                        <Route path='/home' component={() =>
                            <PasswordData lp_data={this.props.lp_data}
                                auth={this.props.auth} />}
                        />
                        <Route exact path='/item/:lp_data_Id'
                            component={LpWithId} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Header
                        auth={this.props.auth}
                        authLogin={this.props.authLogin}
                        logout={this.props.logout}
                    />
                    <div className="container">
                        <div className="row">
                            <h3>Requires authentication</h3>
                        </div>
                    </div>
                </div>
            )
        }



    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));