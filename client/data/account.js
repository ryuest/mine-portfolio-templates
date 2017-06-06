import React from 'react';
import {firebaseAuth, ref} from '../actions/sagas'
import Login from './Login'

class Account extends React.Component {
    constructor() {
        super();
        this.state = {
            authed: false,
            loading: true
        }
    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({authed: true, loading: false})
            } else {
                this.setState({authed: false, loading: false})
            }
        })
    }
    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        <div className="container">
          
        </div>
      }
}

export function auth(email, pw) {
return firebaseAuth().createUserWithEmailAndPassword(email, pw).then(saveUser)
}

export function logout() {
return firebaseAuth().signOut()
}

export function login(email, pw) {
return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword(email) {
return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser(user) {
return ref.child(`users/${user.uid}/info`).set({email: user.email, uid: user.uid}).then(() => user)
}

export default Account;
