import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import img1 from "../images/favicon-big.jpg";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";
import { LogoutAction } from "../actions/login";
import CreateUserModal from "./CreateUserModal";
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
        <Navbar bg="warning" variant="light" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
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
                <Button variant="success">Settings</Button>
              )}
              {this.props.user.isAuthenticated && (
                <Button variant="info">Fav's</Button>
              )}
              {this.props.user.isAuthenticated && (
                <Button
                  variant="danger"
                  onClick={(e) => this.props.LogoutAction()}
                >
                  Logout
                </Button>
              )}
            </div>
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
