import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import InstaClone from "./src/InstaClone.js";
import store from "./src/redux/stores";
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={store.configureStore()}>
        <InstaClone />
      </Provider>
    );
  }
}
