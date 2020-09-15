import React, { useState } from 'react'
import {
  Modal, Button, ModalHeader,
  ModalBody, Form, FormGroup, Label, Input, //Card
} from 'reactstrap';


const LoginForm = (props) => {
  console.log("THE PROPS IN LOGINFORM", props)
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle}>Login</Button>
      <Modal className="modal-lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ align: "center" }}>
          Authentication
            </ModalHeader>
        <ModalBody>
          <Form onSubmit={() => { console.log("The form ran") }}>
            <FormGroup>
              <Label htmlFor="username">Email</Label>
              <Input type="text" id="username" name="username" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">password</Label>
              <Input type="password" id="password" name="password" />
            </FormGroup>
            <Button type="Submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default LoginForm 