import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import ScheduleWrapper from "./ScheduleWrapper";
import MonthAvailability from "./MonthAvailability";

function App() {
  return (
    <div>
      <style global jsx>
        {`
          body {
            font-family: Helvetica;
            background: #f2f2f2;
          }
          .ul {
            list-style: none;
          }
          .gutters {
            width: 80%;
            margin: 0 auto;
          }
        `}
      </style>
      <Header />
      <div className="gutters">
        <Switch>
          <Route exact path="/" component={ScheduleWrapper} />
          <Route path="/produce-availability" component={MonthAvailability} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
