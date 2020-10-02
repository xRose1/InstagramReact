import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import config from "../../config";
import actions from "../../redux/actions";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    };
  }

  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  }

  login() {
    let credentials = this.state.credentials;
    credentials.email = this.state.credentials.email.toLowerCase();
    console.log(JSON.stringify(credentials));
    fetch(config.baseUrl + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(JSON.stringify(jsonResponse));
        if (jsonResponse.confirmation === "success") {
          this.props.userReceived(jsonResponse.data);
          this.props.navigation.navigate("main");
        } else {
          console.log("this is the case");
          throw new Error(jsonResponse.message);
        }
      })
      .catch(err => {
        alert(JSON.stringify(err.message));
      });
  }

  render() {
    return (
      <View
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(252,61,57)"
        }}
      >
        <TextInput
          autoCapitalize="none"
          value={this.state.email}
          placeholder="Email"
          style={styles.input}
          autoCorrect={false}
          onChangeText={text => this.updateText(text, "email")}
        />
        <TextInput
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={text => this.updateText(text, "password")}
          secureTextEntry
          autoCorrect={false}
          placeholder="Password"
          style={styles.input}
        />
        <Button
          onPress={() => {
            this.login();
          }}
          title="Login"
        />
        <Button
          title="No account?  Sign up here!"
          onPress={() => this.props.navigation.navigate("register")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 100 + "%",
    marginHorizontal: 50,
    backgroundColor: "rgb(255,255,255)",
    marginBottom: 10
  }
});

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {
    userReceived: user => dispatch(actions.userReceived(user))
  };
};

export default connect(stateToProps, dispatchToProps)(Login);
