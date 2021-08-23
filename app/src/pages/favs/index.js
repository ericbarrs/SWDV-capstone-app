import React from "react";
import "./favs.css";
import { connect } from "react-redux";
import FavCards from "../../components/FavsCards";
import { GetFavs } from "../../actions/favs";
import { GetStatus } from "../../actions/restaurant";
import { Link } from "react-router-dom";

class FavsContainer extends React.Component {
  componentDidMount() {
    this.props.GetFavs();
  }

  componentDidUpdate() {
    this.props.GetFavs();
  }

  render() {
    return (
      <div className="FavsPage">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Your Favs</h1>
          </div>
          <hr className="my-4" />
          {!this.props.favs.length && (
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-6">
                  You do not have any likes. Go{" "}
                  <Link className="" to="/">
                    <span className="display-6">Home</span>
                  </Link>{" "}
                  To add likes
                </h1>
              </div>
            </div>
          )}
        </div>
        {!!this.props.favs.length && <FavCards />}

        <div id="overlay"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    restaurants: state.restaurants,
    favs: state.favs,
  };
};

const MainPage = connect(mapStateToProps, { GetFavs, GetStatus })(
  FavsContainer
);
export default MainPage;
