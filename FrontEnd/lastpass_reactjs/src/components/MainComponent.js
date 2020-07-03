import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form'
//custom layout
//Temporarily close --> import CustomLayout from '../containers/Layout'
import Header from './Header'
import Layout from '../containers/Layout'
import PasswordData from './PasswordData'
import LpDetail from './PassDetailComponent'
import { fetchLpData } from '../redux/ActionCreators'


const mapStateToProps = state => {
    return {
        lp_data: state.lp_data
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLpData: () => { dispatch(fetchLpData()) }
})

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchLpData();
    }
    render() {
        console.log(">>from main>> ", this.props)
        const HomePage = () => {
            return (
                <PasswordData lp_data={this.props.lp_data} />
            )
        }

        const LpWithId = ({ match }) => {
            return (
                <LpDetail lp_data={this.props.lp_data.filter((lp_data) =>
                    lp_data.id === parseInt(match.params.lp_data_Id, 10))[0]} />
            )
        }

        return (
            <div className="App">
                <Header />
                {/* <Layout /> */}
                <Switch>
                    <Route path='/home' component={() => <PasswordData lp_data={this.props.lp_data} />} />
                    <Route exact path='/item/:lp_data_Id'
                        component={LpWithId} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));