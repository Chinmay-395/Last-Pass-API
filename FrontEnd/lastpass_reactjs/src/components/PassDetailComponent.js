import React, { Component } from 'react'
import {
    Card, CardTitle, /*CardImg, CardImgOverlay,
     Breadcrumb, BreadcrumbItem,*/ CardBody, CardText,
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, Jumbotron, Modal, Button, ModalHeader,
    ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
function RenderLpItem({ x, item }) {
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
        this.state = { 
            isModalOpen: false
         }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
        this.handleUpdateModalData = this.handleUpdateModalData.bind(this);
    }
    handleUpdate(e) {
        console.log("HELLO UPDATE")
        console.log(e);
        this.toggleUpdateModal()

    }
    componentDidMount() {
        console.log("componentDidMount from LPdetail")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate from LPdetail")
    }
    toggleUpdateModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleUpdateModalData(event){
        event.preventDefault()
        this.toggleUpdateModal();
        console.log("OUTPUT VIA handleUpdateModalData>>>>>>", this.name_of_website.value,
                                                        this.url_of_website.value,
                                                        this.username_for_website.value,
                                                        this.password_for_website.value,
                                                        this.notes.value)
        
        // const check_var = this.url_of_website.value
        console.log("ID is----->",this.props.lp_data.id)
        // ----|----- Dispatch the update method from the MainComponent and call it bellow ----|-----
        this.props.update(this.props.lp_data.id, this.name_of_website.value, this.url_of_website.value,
            this.username_for_website.value,this.password_for_website.value,this.notes.value)
    }
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
                        <React.Fragment>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleUpdateModal}>
                                <ModalHeader toggle={this.toggleModal}>Update</ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.handleUpdateModalData}>
                                        <FormGroup>
                                            <Label htmlFor="webpage">Website</Label>
                                            <Input type="text" id="name_of_website" name="name_of_website" placeholder={this.props.lp_data.name_of_website}
                                                innerRef={(input) => this.name_of_website = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="url">URL</Label>
                                            <Input type="text" id="url_of_website" name="url_of_website" placeholder={this.props.lp_data.url_of_website}
                                                innerRef={(input) => this.url_of_website = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="username">Username</Label>
                                            <Input type="username" id="username_for_website" name="username_for_website" placeholder={this.props.lp_data.username_for_website}
                                                innerRef={(input) => this.username_for_website = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="password">Password</Label>
                                            <Input type="password" id="password_for_website" name="password_for_website" placeholder={this.props.lp_data.password_for_website}
                                                innerRef={(input) => this.password_for_website = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="notes">notes</Label>
                                            <Input type="notes" id="notes" name="notes" placeholder={this.props.lp_data.notes}
                                                innerRef={(input) => this.notes = input} />
                                        </FormGroup>
                                        <Button type="Submit" value="submit" color="primary">
                                            Save
                                        </Button>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </React.Fragment>
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