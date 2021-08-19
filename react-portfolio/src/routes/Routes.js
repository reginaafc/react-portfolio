import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Work from "../pages/Work";
import Resume from "../pages/Resume";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
