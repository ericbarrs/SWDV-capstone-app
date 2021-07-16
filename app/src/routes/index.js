import React from "react";
import { Switch, Route } from "react-router-dom";

import { LandingPage } from "../pages/landingpage";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}
