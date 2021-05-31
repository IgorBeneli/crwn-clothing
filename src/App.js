import { React, Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/header/header";
import { auth } from "./components/firebase/firebase";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
