import React from 'react';
import base from '../baseConfig';

class Account extends React.Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      uid: null,
      owner: null
    }
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

//Handle auth events
authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }
/*
firebase.auth().onAuthStateChanged(function(user) {
  window.user = user;
  // Step 1:
  //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
  //  If there is a user, log out out user details for debugging purposes.
});
*/

// Handle page events
authHandler(err, authData)  {
  console.log(authData);
  if (err) {
    console.error(err);
    return;
  }

  // grab the store info
  const storeRef = base.database().ref(this.props.storeId);

  // query the firebase once for the store data
  storeRef.once('value', (snapshot) => {
    const data = snapshot.val() || {};

    // claim it as our own if there is no owner already
    if(!data.owner) {
      storeRef.set({
        owner: authData.user.uid
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: data.owner || authData.user.uid
    });
  });

}
/*
document.querySelector('#sign-in').addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value
  var credential = firebase.auth.EmailAuthProvider.credential(email, password);
  var auth = firebase.auth();
  var currentUser = auth.currentUser;

  // Step 2
  //  Get a credential with firebase.auth.emailAuthProvider.credential(emailInput.value, passwordInput.value)
  //  If there is no current user, log in with auth.signInWithCredential(credential)
  //  If there is a current user an it's anonymous, atttempt to link the new user with firebase.auth().currentUser.link(credential)
  //  The user link will fail if the user has already been created, so catch the error and sign in.
});
*/

logout() {
    base.unauth();
    this.setState({ uid: null });
  }

/*
document.querySelector('#sign-out').addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  firebase.auth().signOut();
});
*/

renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>

      </nav>
    )
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // check if they are no logged in at all
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    // Check if they are the owner of the current store
    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you aren't the owner of this Account!</p>
          {logout}
        </div>
      )
    }

    return (
      <div>
        <h2>Account</h2>
        {logout}
      </div>
    )
  }

}

export default Account;
