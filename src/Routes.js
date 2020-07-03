import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserLanding from './Components/Home/UserLanding';
import Explore from './Components/Explore';
import Notifications from './Components/Notifications';
import Messages from './Components/Messages';
import Bookmarks from './Components/Bookmarks';
import Lists from './Components/Lists';
import MyProfile from './Components/MyProfile';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={GuestLanding} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path='/home' component={UserLanding}/>
      <Route path='/explore' component={Explore}/>
      <Route path='/Notifications' component={Notifications}/>
      <Route path='/Messages' component={Messages}/>
      <Route path='/Bookmarks' component={Bookmarks}/>
      <Route path='/Lists' component={Lists}/>
      <Route path='/MyProfile' component={MyProfile}/>
    </Switch>
  </Router>
);
