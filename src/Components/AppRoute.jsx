import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

export default function AppRoute() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          {/* <div className="inner"> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          {/* </div> */}
        </div>
      </div>
    </Router>
  );
}
