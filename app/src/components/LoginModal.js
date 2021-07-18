import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";

class LoginModal extends React.Component {
  state = {
    user: {
      email: "",
      password: "",
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
            <Modal.Title>Modal title</Modal.Title>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="success">Submit</Button>
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

export default connect(mapStateToProps)(LoginModal);
