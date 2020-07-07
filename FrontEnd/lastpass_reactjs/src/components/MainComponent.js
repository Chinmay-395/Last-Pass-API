import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './HeaderComponent'
import PasswordData from './PasswordData'
import LpDetail from './PassDetailComponent'
import { updateLpData } from '../redux/ActionCreators'

/*
    Whenever the props changes the actionCreators 
    runs all the actions_function inside it
    thereby triggering the fetchLpData which 
    causes all the data entry to be pushed inside the lp_data-array.
    Hence we don't need to explicitly call the fetchLpUpdate function from ActionCreators
*/

class Main extends Component {
    componentDidUpdate() {
        console.log("<componentDidUpdate> inside MainComponent ")
        if (this.props.auth.token !== null && this.props.auth.token !== undefined) {
            console.log("The prop value exist right now", this.props)

        } else if (this.props.auth.token === null && this.props.lp_data.lp_data.length > 0) {
            console.log("Authentication Failed")
        }
        else {
            console.log("Cannot fetch items")
            console.log("Lenght of all lp_data", this.props.lp_data.lp_data.length)
            console.log("My props when component updates", this.props)
        }
    }

    render() {
        if (this.props.auth.token !== null) {
            const LpWithId = ({ match }) => {
                return (
                    <LpDetail lp_data={this.props.lp_data.lp_data.filter((lp_data) =>
                        lp_data.id === parseInt(match.params.lp_data_Id, 10))[0]}
                    //From here I should send the dispatch method for update/delete
                    // update={this.props.updateLpData}
                    />
                )
            }
            return (
                <div className="App">
                    <Header />
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
                    <Header />
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

const mapStateToProps = state => {
    return {
        lp_data: state.lp_data,
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => ({
    // updateLpData: (id, name_of_website, url_of_website, username_for_website,
    //     password_for_website, notes) => {
    //     dispatch(updateLpData(id, name_of_website, url_of_website, username_for_website,
    //         password_for_website, notes))
    // },
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));