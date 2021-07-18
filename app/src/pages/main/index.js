import React from "react";
// import "./LandingPage.css";
import { connect } from "react-redux";
// import Cards from "../../components/Card";
import Searchbar from "../../components/searchbar";

class MainPageContainer extends React.Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage_main">
          <Searchbar />
          {/* {!!this.props.restaurants.length && <Cards />} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const MainPage = connect(mapStateToProps)(MainPageContainer);
export default MainPage;
