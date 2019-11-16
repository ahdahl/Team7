import React from 'react';
import {AppNav} from './App/Navigation';
import {HomeScreen} from './App/Screens';
import * as Font from 'expo-font';

import { AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fontsLoaded: false,
      //loggedIn: false,
      loggedIn: true,
      unsubscribe: null
    }
  }

  async componentWillMount(){
    await Font.loadAsync({
      'lato-regular': require('./assets/fonts/Lato2OFL/Lato2OFL/Lato-Regular.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }

  // // Check out this link to learn more about firebase.auth()
  // // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
  // componentDidMount() {
  //   // This auto detects whether or not a user is signed in.
  //   let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ loggedIn: true });
  //     } else {
  //       this.setState({ loggedIn: false });
  //     }
  //   });

  //   this.setState({ unsubscribe });
  // }

  // componentWillUnmount() {
  //   this.state.unsubscribe();
  // }

  render() {
    if (this.state.fontsLoaded) {
      if (this.state.loggedIn) {
        return <AppNav />;
      } else {
        //return <LoginScreen />;
      }  
    } else {
      return <AppLoading />;
    }
  }
}
