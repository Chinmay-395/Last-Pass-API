import React from 'react';
import {
    Card, /*CardImg, CardImgOverlay,*/
    CardTitle, CardBody, CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import Loading from './LoadingComponent'
import { Icon, Spin } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
function RenderMenuItem({ item }) {
    return (
        <Card>
            <Link to={`/item/${item.id}`}>
                <CardBody>
                    <CardTitle>{item.name_of_website}</CardTitle>
                    <CardText>
                        Website Name: {item.name_of_website}
                        Username:{item.username_for_website}
                        Owner: {item.username}
                    </CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

const PasswordData = (props) => {
    if (props.auth.token !== null) {
        console.log("The props inside the listView", props)
        const fetchPassData = props.lp_data.lp_data.map((lp_data) => {
            return (
                <div className="col-12 col-md-5 m-1" key={lp_data.id}>
                    <RenderMenuItem item={lp_data} />
                </div>
            );
        });
        if (props.lp_data.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <h3>Loading</h3>
                        <Spin indicator={antIcon} />
                    </div>
                </div>
            )
        } else if (props.lp_data.errMess) {
            if (props.lp_data.errMess === "Request failed with status code 401") {
                return (
                    <div className="container">
                        <div className="row">
                            <h4>Authentication required</h4>
                        </div>
                    </div >
                )
            }
            else {
                return (
                    <div className="container">
                        <div className="row">
                            <h4>{props.lp_data.errMess}</h4>
                        </div>
                    </div >
                )
            }

        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <br />
                            <h3>Sites</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {fetchPassData}
                    </div>
                    <br />
                    <div>
                        <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="blue" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                        </svg>
                    </div>
                </div>
            );
        }
    } else {
        return (

            <h4>You have logged out</h4>
        )
    }

}
export default PasswordData;