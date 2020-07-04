import React from 'react';
import {
    Card, /*CardImg, CardImgOverlay,*/
    CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent'

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
    console.log(">>>>>>props ", props)
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
                    {console.log("LOADING RAN")}
                    <Loading />
                </div>
            </div>
        )
    } else if (props.lp_data.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.lp_data.errMess}</h4>
                </div>
            </div>
        )
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
            </div>
        );
    }
}
export default PasswordData;