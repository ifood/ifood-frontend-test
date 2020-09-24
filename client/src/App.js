import React from "react";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./pages";
import { Login, Redirect } from "./molecules";
import { black, white } from "./assets/_colors";
import { CookiesProvider } from "react-cookie";

const history = createBrowserHistory();

function App() {
  return (
    <Wrapper className="App">
      <CookiesProvider>
        <HashRouter basename="/">
          <Switch>
            <Route
              exact={true}
              path={"/"}
              component={(props) => (
                <Redirect history={history} {...props}></Redirect>
              )}
            />
            <Route
              path={"/login"}
              component={(props) => (
                <Login history={history} {...props}></Login>
              )}
            />
            <Route
              exact={true}
              path={"/home"}
              component={(props) => <Home history={history} {...props}></Home>}
            />
          </Switch>
        </HashRouter>
      </CookiesProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${white.primary};
  color: ${black.ifood};
`;

export default App;
