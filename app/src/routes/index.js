import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../pages/landingpage";
import MainPage from "../pages/main";

function RoutesContainer(props) {
  console.log(props.user);
  return (
    <Switch>
      {!props.user.isAuthenticated && (
        <Route exact path="/">
          <LandingPage />
        </Route>
      )}
      {props.user.isAuthenticated && (
        <Route exact path="/">
          <MainPage />
        </Route>
      )}
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export const Routes = connect(mapStateToProps)(RoutesContainer);
