import React from 'react';
import {
    Card, /*CardImg, CardImgOverlay,*/
    CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({ item }) {
    return (
        <Card>
            <Link to={`/item/${item.id}`}>
                <CardBody>
                    <CardTitle>{item.name_of_website}</CardTitle>
                    <CardText>
                        <p>Website Name: {item.name_of_website}</p>
                        <p>Username:{item.username_for_website}</p>
                        <p>Owner: {item.username}</p>
                    </CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

const PasswordData = (props) => {
    console.log(">>>>>>props ", props.lp_data)
    const fetchPassData = props.lp_data.map((lp_data) => {
        return (
            <div className="col-12 col-md-5 m-1" key={lp_data.id}>
                <RenderMenuItem item={lp_data} />
            </div>
        );
    });
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <h3>Loading</h3>
                </div>
            </div>
        )
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
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