import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import { auth } from './firebase/firebase.utils';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

interface UserState {
  currentUser: any;
}

class App extends React.Component<{}, UserState> {

  constructor(props:any) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
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
            <Header currentUser={this.state.currentUser}/>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/signin' component={SignInAndSignUpPage} />
            </Switch>
          </div>
        );
  }
}

export default App;
