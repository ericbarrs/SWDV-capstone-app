import React from "react";
import "./mainPage.css";
import { connect } from "react-redux";
import FilteredCards from "../../components/FilterCards";
import Searchbar from "../../components/searchbar";
import FilterButton from "../../components/FilterButton";
import { GetFavs } from "../../actions/favs";
import { Button } from "react-bootstrap";
import RandomModal from "../../components/RandomPlaceModal";
import { GetStatus } from "../../actions/restaurant";

class MainPageContainer extends React.Component {
  state = {
    randomModal: false,
  };

  handleModal(modal) {
    this.setState({ [modal]: this.state[modal] === false ? true : false });
  }

  handleClose = () => {
    this.setState({ randomModal: false });
  };

  componentDidMount() {
    this.props.GetFavs();
    this.props.GetStatus();
  }

  render() {
    return (
      <div className="MainPage">
        <RandomModal
          show={this.state.randomModal}
          handleClose={this.handleClose}
        />
        <div className="MainPage_Main">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Welcome to Mylocalfood</h1>
              <p className="lead">Enter a zipcode or city to get started</p>
            </div>
            <hr className="my-4" />
          </div>
          <div className="MainPageHeader">
            <Searchbar page={"mainPage"} />
            <FilterButton />
            <div className="randomButton">
              <Button
                variant="primary"
                onClick={() => this.handleModal("randomModal")}
                disabled={!this.props.restaurants.length}
              >
                Random
              </Button>
            </div>
          </div>
          {!!this.props.restaurants.length && <FilteredCards />}
        </div>
        <div id="overlay"></div>
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

const MainPage = connect(mapStateToProps, { GetFavs, GetStatus })(
  MainPageContainer
);
export default MainPage;
