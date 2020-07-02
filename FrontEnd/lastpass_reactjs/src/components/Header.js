import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, Jumbotron, Modal, Button, ModalHeader,
    ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">LastPass</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Header;