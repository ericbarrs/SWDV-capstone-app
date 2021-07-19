import React from "react";
// import "./LandingPage.css";
import { connect } from "react-redux";
import FilteredCards from "../../components/FilterCards";
import Searchbar from "../../components/searchbar";
import FilterButton from "../../components/FilterButton";

class MainPageContainer extends React.Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage_main">
          <Searchbar page={"mainPage"} />
          <FilterButton />
          {!!this.props.restaurants.length && <FilteredCards />}
        </div>
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

const MainPage = connect(mapStateToProps)(MainPageContainer);
export default MainPage;
