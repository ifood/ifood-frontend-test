import React from "react";
import { Switch, Route } from 'react-router-dom';
import LayoutPage from "../Components/LayoutPage";
import Playlists from "../Pages/Playlists";

const AppRoutes: React.FC = () => (
  <LayoutPage>
    <Switch>
      <Route path="/" exact component={Playlists} />
    </Switch>
  </LayoutPage>
);

export default AppRoutes;