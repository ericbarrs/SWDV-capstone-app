import React from "react";
import "./LandingPage.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { landingPageSearch } from "../../actions/landingpage";
import { Card } from "../../components/Card";

class LandingPage extends React.Component {
  state = {
    city: "",
  };

  updateInput(e) {
    this.setState({ city: e.target.value });
  }

  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage_main">
          <div className="InputGroup">
            <InputGroup size="lg">
              <FormControl
                placeholder="Input City or Zipcode"
                aria-label="Users City or zipcode with search button"
                onChange={(e) => this.updateInput(e)}
              />
              <Button
                variant="success"
                onClick={(e) =>
                  this.props.landingPageSearch({ city: this.state.city })
                }
              >
                Search
              </Button>
            </InputGroup>
          </div>
          {console.log(!!this.props.restaurants.length)}
          {!!this.props.restaurants.length && (
            <Card props={this.props.restaurants} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const LandingPageContainer = connect(mapStateToProps, { landingPageSearch })(
  LandingPage
);
export default LandingPageContainer;
