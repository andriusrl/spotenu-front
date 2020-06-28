import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import DetailPostPage from "../SignupGender";
import Signup from "../Signup";
import SignupAdmin from "../../components/SignupAdmin";
import Feed from "../Feed";

export const routes = {
  root: "/",
  login: "/login",
  signup: "/signup",
  signupAdmin: "/signup/admin",
  feed: "/feed",
  detailPost: "/detail-post",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Feed} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={Signup} />
        <Route exact path={routes.signupAdmin} component={SignupAdmin} />
        <Route exact path={routes.feed} component={Feed} />
        <Route exact path={routes.detailPost} component={DetailPostPage} />
      </Switch>
    </ConnectedRouter>
  );
}
export default Router;
