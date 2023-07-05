import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// aws-amplifyの読み込み
import Amplify from 'aws-amplify';
// Reactへの組み込み用HOC
import { withAuthenticator } from 'aws-amplify-react';

// AWSリソースの情報読み込み
Amplify.configure({
    Auth: {
        identityPoolId: '', //REQUIRED - Amazon Cognito Identity Pool ID
        region: '', // REQUIRED - Amazon Cognito Region
        userPoolId: '', //OPTIONAL - Amazon Cognito User Pool ID
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// withAuthenticatorでラップする
export default withAuthenticator(App);