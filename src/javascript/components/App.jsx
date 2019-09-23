import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import Login from "../containers/Login";
import Filter from "../containers/Filter";
import FeaturedPlaylists from "../containers/FeaturedPlaylists";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Filter />
          <Login />
          <FeaturedPlaylists />
        </div>
      </Provider>
    );
  }
}

export default App;
