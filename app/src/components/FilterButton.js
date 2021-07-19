import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col } from "react-bootstrap";
import { filterPrice } from "../actions/filterPrice";
import "../css/filterButton.css";

export class FilterButton extends Component {
  render() {
    return (
      <div className="filterButton mb-2 ">
        <Form>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Price</Form.Label>
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
