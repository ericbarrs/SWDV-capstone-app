import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import States from "../functions/states";

import { CreateUserAction } from "../actions/login";

class CreateUserModal extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      vPassword: "",
      phone: "",
      street_address1: "",
      street_address2: "",
      city: "",
      state: "",
      zipcode: "",
    },
  };

  formHandler(e) {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  }

  render() {
    const { props } = this;
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                  type="password"
                  name="vPassword"
                  placeholder="Verify Password"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="string"
                  name="firstName"
                  placeholder="Enter First name"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="string"
                  name="lastName"
                  placeholder="Enter Last name"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="string"
                  name="phone"
                  placeholder="XXX-XXX-XXXX"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="string"
                  name="street_address1"
                  placeholder="Street Address"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="string"
                  name="street_address2"
                  placeholder="Street Address 2"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="string"
                  name="city"
                  placeholder="City"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  defaultValue="Choose..."
                  onChange={(e) => this.formHandler(e)}
                >
                  <option>Choose...</option>
                  {States}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicZipcode">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="string"
                  name="zipcode"
                  placeholder="55555"
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={() => {
                props.handleClose();

                props.CreateUserAction(this.state);
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { CreateUserAction })(CreateUserModal);
