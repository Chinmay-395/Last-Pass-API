import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, /*Jumbotron,*/  Modal, Button, ModalHeader,
    ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { fetchLpData, authLogin, logout,/*authCheckState*/ } from '../redux/ActionCreators'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidUpdate() {
        console.log("rendering header component within main from <componentDidUpdate>")
    }
    componentDidMount() {
        console.log("rendering header component within main from <componentDidMount>")

    }
    toggleNav() {
        // this.setState(prevState)
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        console.log("Username " + this.username.value + " password: " + this.password.value)
        // this.props.auth(this.username.value, this.password.value)
        this.props.authLogin(this.username.value, this.password.value)
        event.preventDefault();
    }

    handleLogout() {
        // this.toggleModal();
        console.log("the logout method ran")
        this.props.logout();
    }
    render() {
        const token = localStorage.getItem('token')
        console.log("This is regarding checking token", token)
        console.log("the token from props", this.props.auth.token)
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            LastPass
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> cns_API
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About us
                                    </NavLink>
                                </NavItem>
                                {token !== null ?
                                    <React.Fragment>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/aboutus">
                                                <span className="fa fa-info fa-lg"></span> {localStorage.getItem('name')}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <Button onClick={this.handleLogout}>
                                                <span className="fa fa-sign fa-lg"></span> Logout
                                            </Button>
                                        </NavItem>
                                    </React.Fragment>

                                    :
                                    <div></div>
                                }

                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button onClick={this.toggleModal}>
                                        <span className="fa fa-sign fa-lg"></span> Login/SignUp
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <Button type="Submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;