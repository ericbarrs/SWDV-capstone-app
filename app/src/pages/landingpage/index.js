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
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Welcome to Mylocalfood</h1>
              <p className="lead">Enter a zipcode or city to get started</p>
            </div>
            <hr className="my-4" />
          </div>
          <Searchbar page={"landingPage"} />
          {!!this.props.LandingPageRest.length && <Cards />}
        </div>
        <div id="overlay"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LandingPageRest: state.LandingPageRest,
  };
};

const LandingPageContainer = connect(mapStateToProps)(LandingPage);
export default LandingPageContainer;
