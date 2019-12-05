import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={GuestLanding} />
    </Switch>
  </Router>
);
