import React from "react";
import "./LandingPage.css";
import { connect } from "react-redux";
import Cards from "../../components/Card";
import Searchbar from "../../components/searchbar";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage_main">
          <Searchbar page={"landingPage"} />
          {!!this.props.restaurants.length && <Cards />}
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

const LandingPageContainer = connect(mapStateToProps)(LandingPage);
export default LandingPageContainer;
