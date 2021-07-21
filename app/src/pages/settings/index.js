import React from "react";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import States from "../../functions/states";
import "./settings.css";

class SettingsContainer extends React.Component {
  render() {
    return (
      <div className="Settings_Main">
        <Form>
          <Container>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.props.user.email}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
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
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="string"
                  name="firstName"
                  placeholder="Enter First name"
                  value={this.props.user.firstName}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="string"
                  name="lastName"
                  placeholder="Enter Last name"
                  value={this.props.user.lastName}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="string"
                  name="phone"
                  placeholder="XXX-XXX-XXXX"
                  value={this.props.user.phone}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="string"
                  name="street_address1"
                  placeholder="Street Address"
                  value={this.props.user.street_address1}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="string"
                  name="street_address2"
                  placeholder="Street Address 2"
                  value={this.props.user.street_address2}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="string"
                  name="city"
                  placeholder="City"
                  value={this.props.user.city}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  defaultValue={`${this.props.user.state}`}
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
                  value={this.props.user.zipcode}
                  onChange={(e) => this.formHandler(e)}
                />
              </Form.Group>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
            <Button
              variant="danger"
              //   onClick={() => {
              //     props.handleClose();

              //     props.CreateUserAction(this.state);
              //   }}
            >
              Cancel
            </Button>
            <Button
              variant="success"
              //   onClick={() => {
              //     props.handleClose();

              //     props.CreateUserAction(this.state);
              //   }}
            >
              Save
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    restaurants: state.restaurants,
  };
};

const SettingsPage = connect(mapStateToProps)(SettingsContainer);
export default SettingsPage;
