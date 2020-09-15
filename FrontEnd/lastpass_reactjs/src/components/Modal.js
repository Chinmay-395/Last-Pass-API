import React, { Component } from 'react'

import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';
import { createLpData } from '../redux/ActionCreators';


class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      setModal: false,
      isModalOpen: true,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
  }
  componentDidMount() {
    console.log("The toggle", this.props.newToggle)
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  toggleUpdateModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleModalClose() {
    this.toggleModal();
  }
  handleSubmit(e) {
    this.toggleModal();
    e.preventDefault();
    console.log("Handle Login")
    console.log('the data', this.name_of_website.value, this.url_of_website.value, this.username_for_website.value,
      this.password_for_website.value, this.notes.value)
    this.props.createLpData(this.name_of_website.value, this.url_of_website.value, this.username_for_website.value,
      this.password_for_website.value, this.notes.value)

  }
  render() {
    return (
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleUpdateModal} >
        <ModalHeader>Modal title
                    <Button onClick={this.handleModalClose} color="danger">close</Button>{' '}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="webpage">Website</Label>
              <Input
                type="text"
                id="name_of_website"
                name="name_of_website"
                placeholder="name_of_website"
                innerRef={(input) => (this.name_of_website = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="url">URL</Label>
              <Input
                type="text"
                id="url_of_website"
                name="url_of_website"
                placeholder="url_of_website"
                innerRef={(input) => (this.url_of_website = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="username"
                id="username_for_website"
                name="username_for_website"
                placeholder="username_for_website"
                innerRef={(input) =>
                  (this.username_for_website = input)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password_for_website"
                name="password_for_website"
                placeholder="password_for_website"
                innerRef={(input) =>
                  (this.password_for_website = input)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="notes">notes</Label>
              <Input
                type="notes"
                id="notes"
                name="notes"
                placeholder="notes"
                innerRef={(input) => (this.notes = input)}
              />
            </FormGroup>
            <Button type="Submit" value="submit" color="primary">
              Create
                        </Button>
          </Form>
        </ModalBody>
      </Modal>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  createLpData: (name_of_website, url_of_website, username_for_website,
    password_for_website, notes) => dispatch(createLpData(name_of_website, url_of_website, username_for_website,
      password_for_website, notes))
})


export default connect(null, mapDispatchToProps)(ModalForm);
