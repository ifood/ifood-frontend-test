import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Playlists from "./pages/Playlists";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <DocumentTitle title="Spotifood">
                        <Landing />
                    </DocumentTitle>
                </Route>

                <Route exact path="/login">
                    <DocumentTitle title="Spotifood - Login">
                        <Login />
                    </DocumentTitle>
                </Route>

                <Route exact path="/playlists">
                    <DocumentTitle title="Spotifood - PLaylists">
                        <Playlists />
                    </DocumentTitle>
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default Router;