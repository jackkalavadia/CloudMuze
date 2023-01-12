import React from "react";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import OpenPlayer from "./open/open_player";
import Modal from "./sidebar/playlist/modal";
const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/open" component={OpenPlayer} />
    </Switch>
  </div>
);

export default App;
