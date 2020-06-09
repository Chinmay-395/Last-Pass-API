import React, { Component } from 'react';
import axios from 'axios'
import { Card, Input, Button } from 'antd';

// import PasswordDatas from '../components/PasswordData'
import CustomForm from '../components/Form';


class PassDetail extends Component {

    state = {
        password_data: {}
    }

    componentDidMount() {
        const passID = this.props.match.params.passID;
        axios.get(`http://127.0.0.1:8000/lastpass_api/feed_clone/${passID}`)
            .then(res => {
                this.setState({
                    password_data: res.data
                });
            })
    }

    render() {
        return (
            // <PasswordDatas data={password_data} />
            <div>
                <h1>Detail view</h1>
                This detail view should be another card which will overlap the existing page.
                for much vivid detail checkout your OneNote page regarding the "detail page"
                <Card title={this.state.password_data.name_of_website}>
                    <p>
                        {this.state.password_data.url_of_website} --> using this url I would create api system that allows
                        the user to login from this url itself
                        <br />
                        Username: {this.state.password_data.username_for_website}
                        <br />
                        password: {this.state.password_data.password_for_website}
                        <br />
                        notes: {this.state.password_data.notes}
                        <br />
                        {/* {console.log(Request.user.id)} */}


                    </p>
                </Card>
                <br />
                <CustomForm
                    requestType="put"
                    passID={this.props.match.params.passID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}
export default PassDetail;

// -- Temporary testing data
// const data = [
//     {
//         "id": 1,
//         "ogUser": 3,
//         "name_of_website": "Netflix",
//         "url_of_website": "https://www.netflix.com/",
//         "username_for_website": "shikamaru",
//         "password_for_website": "test@1234",
//         "notes": "The password is test@1234"
//     },
//     {
//         "id": 2,
//         "ogUser": 3,
//         "name_of_website": "Netflix",
//         "url_of_website": "https://www.netflix.com/",
//         "username_for_website": "shikamaru",
//         "password_for_website": "test@1234",
//         "notes": "The password is test@1234"
//     },
//     {
//         "id": 5,
//         "ogUser": 3,
//         "name_of_website": "Test website",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": ""
//     },
//     {
//         "id": 6,
//         "ogUser": 3,
//         "name_of_website": "gwq",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "new"
//     },
//     {
//         "id": 7,
//         "ogUser": 3,
//         "name_of_website": "nrew",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "nuke"
//     },
//     {
//         "id": 8,
//         "ogUser": 3,
//         "name_of_website": "nrew",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "nuke"
//     },
//     {
//         "id": 9,
//         "ogUser": 3,
//         "name_of_website": "nrew",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "nuke"
//     },
//     {
//         "id": 10,
//         "ogUser": 3,
//         "name_of_website": "nrew",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "nuke"
//     },
//     {
//         "id": 11,
//         "ogUser": 3,
//         "name_of_website": "new web",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "twe"
//     },
//     {
//         "id": 12,
//         "ogUser": 3,
//         "name_of_website": "new web",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "twe"
//     },
//     {
//         "id": 13,
//         "ogUser": 3,
//         "name_of_website": "gwq",
//         "url_of_website": "",
//         "username_for_website": null,
//         "password_for_website": null,
//         "notes": "hweq"
//     }
// ];