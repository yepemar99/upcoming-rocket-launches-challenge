import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "../layout/Layout";
import Lunch from "../pages/Launch";
import UpcomingLaunches from "../pages/UpcomingLaunches";

const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Redirect from="/" to="/upcoming-launches" exact />
          <Route path="/upcoming-launches" exact component={UpcomingLaunches} />
          <Route path="/launch/:id" exact component={Lunch} />
          <Route path="*" component={() => <div>404</div>} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default Routes;
