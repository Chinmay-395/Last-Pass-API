import React, { Component } from 'react';
import axios from 'axios'

import PasswordDatas from '../components/PasswordData'
import CustomForm from '../components/Form';

class PassList extends Component {

    state = {
        password_datas: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/lastpass_api/feed_clone/')
            .then(res => {
                this.setState({
                    password_datas: res.data
                });
            })

    }

    render() {
        return (
            <div>
                <PasswordDatas data={this.state.password_datas} />
                <br />
                <h2>Add new account</h2>
                <br />
                <CustomForm
                    requestType="post"
                    passID={null}
                    btnText="Add"
                />
            </div>

        )
    }
}
export default PassList

