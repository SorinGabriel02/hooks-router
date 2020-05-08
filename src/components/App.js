import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Users from "./Users";
import Albums from "./Albums";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
