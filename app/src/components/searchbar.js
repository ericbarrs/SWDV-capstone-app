import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { SearchForRestaurants } from "../actions/searchbar";

class Searchbar extends React.Component {
  state = {
    city: "",
  };

  updateInput(e) {
    this.setState({ city: e.target.value });
  }
  render() {
    return (
      <div className="InputGroup">
        <InputGroup size="lg">
          {/* <Button
            variant="danger"
            // onClick={(e) =>
            //   this.props.SearchForRestaurants({ city: this.state.city })
            // }
          >
            clear
          </Button> */}
          <FormControl
            placeholder="Input City or Zipcode"
            aria-label="Users City or zipcode with search button"
            onChange={(e) => this.updateInput(e)}
          />
          <Button
            variant="success"
            onClick={(e) =>
              this.props.SearchForRestaurants({
                city: this.state.city,
                page: this.props.page,
              })
            }
          >
            Search
          </Button>
        </InputGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const SearchbarContainer = connect(mapStateToProps, { SearchForRestaurants })(
  Searchbar
);
export default SearchbarContainer;