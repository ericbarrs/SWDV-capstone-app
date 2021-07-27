import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { filterPrice } from "../actions/filterPrice";
import "../css/filterButton.css";
import RandomModal from "../components/RandomPlaceModal";

export class FilterButton extends Component {
    state = {
        randomModal: false,
    };

    handleModal(modal) {
        this.setState({ [modal]: this.state[modal] === false ? true : false });
    }
    handleClose = () => {
        this.setState({ randomModal: false });
    };
    render() {
        return (
            <div className="filterButton">
                <RandomModal
                    show={this.state.randomModal}
                    handleClose={this.handleClose}
                />
                <Form>
                    <Form.Group as={Row} className="">
                        <Col xs={6}>
                            <Form.Label
                                column
                                xs="6"
                                style={{ fontSize: "18px" }}
                            >
                                {/* Price */}
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="filter"
                                defaultValue="$$$$"
                                onChange={(e) =>
                                    this.props.filterPrice(e.target.value)
                                }
                            >
                                <option value="four" key="four">
                                    $$$$
                                </option>
                                <option value="three" key="three">
                                    $$$
                                </option>
                                <option value="two" key="two">
                                    $$
                                </option>
                                <option value="one" key="one">
                                    $
                                </option>
                            </Form.Control>
                        </Col>

                        <Col xs={6}>
                            <Form.Label
                                column
                                xs="6"
                                style={{ fontSize: "18px" }}
                            ></Form.Label>
                            <Button
                                variant="primary"
                                onClick={() => this.handleModal("randomModal")}
                                disabled={!this.props.restaurants.length}
                            >
                                Random
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants,
});

const mapDispatchToProps = {
    filterPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
