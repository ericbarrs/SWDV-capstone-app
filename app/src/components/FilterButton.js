import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Row } from "react-bootstrap";
import { filterPrice } from "../actions/filterPrice";
import "../css/filterButton.css";

export class FilterButton extends Component {
  render() {
    return (
      <div className="filterButton">
        <Form>
          <Form.Group as={Row} className="">
            <Form.Label column sm="4" style={{ fontSize: "18px" }}>
              Price
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                name="filter"
                defaultValue="$$$$"
                onChange={(e) => this.props.filterPrice(e.target.value)}
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
