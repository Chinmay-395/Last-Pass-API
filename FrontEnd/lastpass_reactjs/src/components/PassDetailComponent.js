import React, { Component } from 'react'
import {
    Card, CardTitle, /*CardImg, CardImgOverlay,
     Breadcrumb, BreadcrumbItem,*/ CardBody, CardText
} from 'reactstrap';
function RenderLpItem({ x, item }) {
    // let handleUpdate = (item) => {
    //     console.log("update ran")
    //     console.log(item)
    // }
    return (
        <Card sm="6" style={{ margin: "5rem", border: '1px solid black' }}>
            <CardBody>
                <CardTitle>{item.name_of_website}</CardTitle>
                <p>
                    Username:{item.username_for_website}
                    <br />
                    Owner: {item.username}
                    <br />
                    password: {item.password_for_website}
                </p>
                <CardText>
                    {item.notes}
                </CardText>
            </CardBody>
            <button type="button" className="btn btn-primary" onClick={() => x(item)}>UPDATE</button>
            <button type="button" className="btn btn-danger">DELETE</button>
        </Card >
    )
}


class LpDetail extends Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate(e) {
        console.log("HELLO UPDATE")
        console.log(e);
        // await axios.post()

    }
    componentDidMount() {
        console.log("componentDidMount from LPdetail")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate from LPdetail")
    }
    // handlePartialUpdate(){}
    // handleDelete(){}
    render() {
        if(this.props.auth.token!==null){
            if (this.props.lp_data != null) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <RenderLpItem x={this.handleUpdate} item={this.props.lp_data} />
                            </div>
                        </div>
                    </div >
                )
            }
            else {
                return (<div></div>)
            }
        }else{
            return(<h3>You haven't authenticated</h3>)
        }
        
    }
}
export default LpDetail