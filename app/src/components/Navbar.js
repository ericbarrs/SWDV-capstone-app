import React from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import img1 from "../images/favicon-big.jpg";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";
import { LogoutAction } from "../actions/login";
import CreateUserModal from "./CreateUserModal";
import "../css/NavBar.css";
import { LinkContainer } from "react-router-bootstrap";

class NavBar extends React.Component {
    state = {
        LoginShow: false,
        CreateUserShow: false,
    };

    handleModal(modal) {
        this.setState({ [modal]: this.state[modal] === false ? true : false });
    }

    handleClose = () => {
        this.setState({ LoginShow: false, CreateUserShow: false });
    };

    render() {
        return (
            <Navbar
                collapseOnSelect
                bg="warning"
                expand="lg"
                variant="light"
                fixed="top"
            >
                <Container>
                    <LinkContainer to="/" className="link">
                        <Nav.Link>
                            <Navbar.Brand>
                                <img
                                    alt=".."
                                    src={img1}
                                    width="32"
                                    height="32"
                                    className="d-inline-block align-top"
                                />
                                Mylocalfood
                            </Navbar.Brand>
                        </Nav.Link>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav className="">
                            {!this.props.user.isAuthenticated && (
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        <Button
                                            variant="primary"
                                            onClick={() =>
                                                this.handleModal("LoginShow")
                                            }
                                        >
                                            Login
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {!this.props.user.isAuthenticated && (
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        <Button
                                            variant="secondary"
                                            onClick={() =>
                                                this.handleModal(
                                                    "CreateUserShow"
                                                )
                                            }
                                        >
                                            Create User
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {this.props.user.isAuthenticated && (
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        <Button variant="primary">Home</Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {this.props.user.isAuthenticated && (
                                <LinkContainer to="/settings">
                                    <Nav.Link>
                                        <Button variant="success">
                                            Settings
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {this.props.user.isAuthenticated && (
                                <LinkContainer to="/favs">
                                    <Nav.Link>
                                        <Button variant="info">Fav's</Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {this.props.user.isAuthenticated && (
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        <Button
                                            variant="danger"
                                            onClick={(e) =>
                                                this.props.LogoutAction()
                                            }
                                        >
                                            Logout
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <LoginModal
                    show={this.state.LoginShow}
                    handleClose={this.handleClose}
                />
                <CreateUserModal
                    show={this.state.CreateUserShow}
                    handleClose={this.handleClose}
                />
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { LogoutAction })(NavBar);
