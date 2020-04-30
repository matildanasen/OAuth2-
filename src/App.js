import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import AddData from "./addData";
import GetData from "./getData";

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSucess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log(user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <h1>Welcome {firebase.auth().currentUser.email}!</h1>

            <AddData
              userId={firebase.auth().currentUser.uid}
              userEmail={firebase.auth().currentUser.email}
            />
            <GetData userId={firebase.auth().currentUser.uid} />

            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />

            <br></br>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
