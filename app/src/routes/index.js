import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../pages/landingpage";
import MainPage from "../pages/main";
import Favs from "../pages/favs";
import SettingsPage from "../pages/settings";

function RoutesContainer(props) {
  return (
    <Switch>
      {!props.user.isAuthenticated && (
        <Route exact path="/">
          <LandingPage />
        </Route>
      )}
      {props.user.isAuthenticated && (
        <>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/favs">
            <Favs />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </>
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
