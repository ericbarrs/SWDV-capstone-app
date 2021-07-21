import React from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import img1 from "../images/favicon-big.jpg";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";
import { LogoutAction } from "../actions/login";
import CreateUserModal from "./CreateUserModal";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

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
      <div>
        <LoginModal
          show={this.state.LoginShow}
          handleClose={this.handleClose}
        />
        <CreateUserModal
          show={this.state.CreateUserShow}
          handleClose={this.handleClose}
        />
        <Navbar bg="warning" expand="lg" variant="light" fixed="top">
          <Container>
            <Link className="link" to="/">
              <Navbar.Brand>
                <img
                  alt=".."
                  src={img1}
                  width="32"
                  height="32"
                  className="d-inline-block align-top"
                />
                {"  "}
                Mylocalfood
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <div id="nav_button_div">
                  {!this.props.user.isAuthenticated && (
                    <Button
                      variant="primary"
                      onClick={() => this.handleModal("LoginShow")}
                    >
                      Login
                    </Button>
                  )}
                  {!this.props.user.isAuthenticated && (
                    <Button
                      variant="secondary"
                      onClick={() => this.handleModal("CreateUserShow")}
                    >
                      Create User
                    </Button>
                  )}
                  {this.props.user.isAuthenticated && (
                    <Link to="/">
                      <Button variant="secondary">Home</Button>
                    </Link>
                  )}
                  {this.props.user.isAuthenticated && (
                    <Link to="/settings">
                      <Button variant="success">Settings</Button>
                    </Link>
                  )}
                  {this.props.user.isAuthenticated && (
                    <Link className="link" to="/favs">
                      <Button variant="info">Fav's</Button>
                    </Link>
                  )}
                  {this.props.user.isAuthenticated && (
                    <Link to="/">
                      <Button
                        variant="danger"
                        onClick={(e) => this.props.LogoutAction()}
                      >
                        Logout
                      </Button>
                    </Link>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { LogoutAction })(NavBar);
