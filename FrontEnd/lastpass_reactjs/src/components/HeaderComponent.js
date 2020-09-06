import React, { Component } from 'react';
import { authLogin, logout, } from '../redux/ActionCreators'
import { connect } from 'react-redux';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, Jumbotron, Modal, Button, ModalHeader,
    ModalBody, Form, FormGroup, Label, Input, //Card
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import MainIcon from '../../shared/lastpass-icon.svg'

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
        console.log("<componentDidUpdate> from HeaderComponent", this.props)
    }
    componentDidMount() {
        console.log("<componentDidMount> from HeaderComponent", this.props)
    }
    toggleNav() {
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
        this.props.authLogin(this.username.value, this.password.value)
        event.preventDefault();
    }

    handleLogout() {
        this.props.logout();
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        {/* <NavbarBrand className="mr-auto" href="/">
                            LastPass
                        </NavbarBrand> */}
                        <NavbarBrand className="mr-auto" href="" to="/home">
                            {/* <NavLink className="nav-link" to="/home"> */}
                            <img src={MainIcon} height="40" width="41"
                                alt="LastPass" />
                            {/* </NavLink> */}
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
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
                            </Nav>
                            <Nav className="mr-2">
                                {this.props.auth.token !== null ?
                                    <React.Fragment>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/aboutus">
                                                <span className="fa fa-info fa-lg"></span> {localStorage.getItem('name')}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <Button type="button" onClick={this.handleLogout}>
                                                <span className="glyphicon glyphicon-log-out"></span> Logout
                                            </Button>
                                        </NavItem>
                                    </React.Fragment>
                                    :
                                    <NavItem >
                                        <Button onClick={this.toggleModal}>
                                            <span className="fa fa-sign fa-lg"></span> Login/SignUp
                                        </Button>
                                    </NavItem>
                                }
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={{ backgroundColor: "#966cdf" }}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>LastPass</h1>
                                <p>One Password to rule them all, One Password to find them, One Password to bring them all. and in the darkness bind them.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal className="modal-lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} style={{ align: "center" }}>Authentication</ModalHeader>
                    <ModalBody>
                        {/*+++++++ If you want to add SignUp_Login modal add below +++++++ */}
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Email</Label>
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

const mapStateToProps = state => {
    return {
        lp_data: state.lp_data,
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => ({
    authLogin: (username, password) => {
        dispatch(authLogin(username, password))
    },
    logout: () => { dispatch(logout()) }

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);