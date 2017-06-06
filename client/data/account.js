import React from 'react';
import {firebaseAuth} from './baseConfig'
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

    render() {
        return (
            <div className="container">
                <ul className="nav navbar-nav pull-right">
                    <li>
                        {this.state.authed
                            ? <button style={{
                                    border: 'none',
                                    background: 'transparent'
                                }} onClick={() => {
                                    logout()
                                }} className="navbar-brand">Logout</button>
                            : <button style={{
                                border: 'none',
                                background: 'transparent'
                            }} onClick={() => {
                                console.log("dsds")
                            }} className="navbar-brand">Login</button>}
                    </li>
                </ul>
            </div>
        )
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

export default Account;
