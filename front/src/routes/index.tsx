import React from "react";
import { Switch ,Route } from "react-router-dom";

import Dashboard from "../pages/Dashboards/Index";
import Repository from "../Repository/Index";



const routes: React.FC = () => (
  <Switch>
    <Route path="/"  exact component={Dashboard}/>
    <Route path="/repositories/:repository+"  component={Repository} />
  </Switch>

);

export default routes;

