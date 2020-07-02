import React, { Component } from 'react'
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText
} from 'reactstrap';
function RenderLpItem({ item }) {
    return (
        <CardBody>
            <CardTitle>{item.name_of_website}</CardTitle>
            <CardText>
                <p>Website Name: {item.name_of_website}</p>
                <p>Username:{item.username_for_website}</p>
                <p>Owner: {item.username}</p>
            </CardText>
        </CardBody>
    )
}

const LpDetail = (props) => {
    if (props.lp_data != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderLpItem item={props.lp_data} />
                </div>
            </div>
        )
    }
}
export default LpDetail