import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Users from "./Users";
import Albums from "./Albums";
import AlbumPhotos from "./AlbumPhotos";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/:userId/albums">
          <Albums />
        </Route>
        <Route path="/users/:userId/albums/:albumId/photos">
          <AlbumPhotos />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
