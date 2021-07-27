import React from "react";
import { Button, Form, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import States from "../../functions/states";
import "./settings.css";
import { UpdateUserAction } from "../../actions/login";

class SettingsContainer extends React.Component {
    state = {
        user: {
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            password: "",
            vPassword: "",
            phone: this.props.user.phone,
            street_address1: this.props.user.street_address1,
            street_address2: this.props.user.street_address2,
            city: this.props.user.city,
            state: this.props.user.state,
            zipcode: this.props.user.zipcode,
        },
    };

    formHandler = (e) => {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value },
        });
    };

    render() {
        return (
            <div className="Settings">
                <div className="Settings_Main">
                    <Form>
                        <Container>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={this.state.user.email}
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
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="firstName"
                                        placeholder="Enter First name"
                                        value={this.state.user.firstName}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="lastName"
                                        placeholder="Enter Last name"
                                        value={this.state.user.lastName}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="phone"
                                        placeholder="XXX-XXX-XXXX"
                                        value={this.state.user.phone}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="street_address1"
                                        placeholder="Street Address"
                                        value={this.state.user.street_address1}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="street_address2"
                                        placeholder="Street Address 2"
                                        value={this.state.user.street_address2}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="city"
                                        placeholder="City"
                                        value={this.state.user.city}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="state"
                                        defaultValue={`${this.state.user.state}`}
                                        onChange={(e) => this.formHandler(e)}
                                    >
                                        <option>Choose...</option>
                                        {States}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicZipcode"
                                >
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control
                                        type="string"
                                        name="zipcode"
                                        placeholder="55555"
                                        value={this.state.user.zipcode}
                                        onChange={(e) => this.formHandler(e)}
                                    />
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Col>
                            <Button
                                variant="danger"
                                onClick={() => {
                                    this.setState({
                                        user: { ...this.props.user },
                                    });
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="success"
                                onClick={() => {
                                    this.props.UpdateUserAction(
                                        this.props.user.token,
                                        this.state.user
                                    );
                                }}
                            >
                                Save
                            </Button>
                        </Container>
                    </Form>
                </div>
                <div id="overlay"></div>
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

const SettingsPage = connect(mapStateToProps, { UpdateUserAction })(
    SettingsContainer
);
export default SettingsPage;
