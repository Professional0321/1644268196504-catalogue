import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Watches from "../Watches";
import IPhones from "../IPhones";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/watches">
        <Watches />
      </Route>
      <Route exact path="/iphones">
        <IPhones />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
