import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { createTheme, BaseProvider } from "baseui";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "components/PrivateRoute";
import PublicOnlyRoute from "components/PublicOnlyRoute";
import Landing from "containers/Landing";
import Playlists from "containers/Playlists";
import CallbackHandler from "containers/CallbackHandler";
import { DEFAULT_APP_LANGUAGE } from "./constants";
import enJson from "./translations/en.json";
import ptJson from "./translations/pt.json";

const translations = {
  en: enJson,
  pt: ptJson,
};

const primitives = {
  accent: "#EA1D2C",
};

const overrides = {
  colors: {
    borderFocus: primitives.accent,
    menuFillHover: primitives.accent,
    buttonSecondaryText: primitives.accent,
    inputFillActive: "white",
    inputBorder: "white",
    menuFontHighlighted: "white",
    calendarHeaderBackground: primitives.accent,
    calendarDayBackgroundSelectedHighlighted: primitives.accent,
  },
};
const theme = createTheme(primitives, overrides);

const engine = new Styletron();

export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: DEFAULT_APP_LANGUAGE,
    };
  }

  render() {
    return (
      <IntlProvider
        messages={translations[this.state.locale]}
        locale={this.state.locale}
        defaultLocale={DEFAULT_APP_LANGUAGE}
      >
        <Router history={history}>
          <StyletronProvider value={engine}>
            <BaseProvider theme={theme}>
              <div className="app">
                <Switch>
                  <PublicOnlyRoute
                    path="/callback"
                    component={CallbackHandler}
                  />
                  <PublicOnlyRoute path="/intro" component={Landing} />
                  <PrivateRoute path="/" component={Playlists} />
                </Switch>
              </div>
            </BaseProvider>
          </StyletronProvider>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
