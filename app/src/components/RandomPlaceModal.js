import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { LoginAction } from "../actions/login";
import RandomCard from "./RandomCard";

class RandomPlace extends React.Component {
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

    const allRestaurants = [];

    const index = ["one", "two", "three", "four"];

    this.props.restaurants.forEach((business, idx) =>
      business[index[idx]].forEach((bus) => {
        allRestaurants.push(bus);
      })
    );

    return (
      <div className="RandomModal">
        <Modal
          show={props.show}
          onHide={props.handleClose}
          keyboard={false}
          centered
        >
          <Modal.Header style={{ justifyContent: "center" }}>
            <Modal.Title>Random Pick</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RandomCard random={allRestaurants} />
          </Modal.Body>
          <Modal.Footer style={{ display: "block" }}>
            <Button variant="warning" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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

const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPlace);
