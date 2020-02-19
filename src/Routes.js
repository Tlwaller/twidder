import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserLanding from './Components/UserLanding';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={GuestLanding} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path='/home' component={UserLanding}/>
    </Switch>
  </Router>
);
