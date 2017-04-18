import React from 'react';
import LeftMenuPage from './LeftMenuPage';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import navPages from '../data/navPages';
import base from '../data/base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import * as actionCreators from '../actions/sagas'; //rootSaga
import {rootSaga} from '../actions/sagas';
import samplePosts from '../data/posts';
import events from '../data/events';
import posts from '../data/posts';
import pages from '../data/navPages';
import competitions from '../data/competitions';
import {getFunName} from '../helpers';
import {SpeechLoaders} from './SpeechLoaders';

//import firebase from 'firebase';
//import firebaseConfig from '../data/base';
import {selectors} from '../reducers';

let database;

/*
export const fetchFirebase = (path) => {
    if (database === undefined) {
      //  firebase.initializeApp(firebaseConfig);
        database = base.database();
    }

    let resolvedPath = path;
    if (resolvedPath instanceof Array) {
        resolvedPath = path.join('/');
    }

    return database.ref(resolvedPath).once('value').then((snapshot) => snapshot.val());
};
*/

class App extends React.Component {
    constructor() {
        super();
        this.renderLogin = this.renderLogin.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.logout = this.logout.bind(this);
        //  this.loadSamples = this.loadSamples.bind(this);
        this.state = {
            pages: navPages,
            fishes: samplePosts
        }
    }
    
    syncWithDatabase(type) {
        this.ref = base.syncState(`/${type}`, {
            context: this,
            state: type
        });
    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        this.syncWithDatabase("fishes");
        this.syncWithDatabase("events");
        this.syncWithDatabase("posts")
        this.syncWithDatabase("competitions")
        this.syncWithDatabase("pages")

        /*
    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
*/
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }

    componentDidMount() {
        base.onAuth((user) => {
            if (user) {
                this.authHandler(null, {user});
            }
        });
    }

    authenticate(provider) {
        console.log(`Trying to log in with ${provider}`);
        base.authWithOAuthPopup(provider, this.authHandler);
    }

    logout() {
        base.unauth();
        this.setState({uid: null});
    }
    authHandler(err, authData) {
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
            if (!data.owner) {
                storeRef.set({owner: authData.user.uid});
            }

            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid,
                //      fishes: samplePosts,
                //      events: events,
                //      posts: posts,
                //      competitions: competitions,
                //        pages: pages
            });
        });
    }

    renderLogin() {
        return (
            <nav className="login">
                <h2>Inventory</h2>
                <p>Sign in to manage your store's inventory</p>
                <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
                <button className="facebook" onClick={() => this.authenticate('facebook'),
                this.goToStore()}>Log In with Facebook</button>
                <button className="twitter" onClick={() => this.authenticate('twitter')}>Log In with Twitter</button>
            </nav>
        )
    }

    goToStore(event) {
        console.log('You Changed the URL');
        // first grab the text from the box
        const storeId = getFunName();
        console.log(`Going to ${storeId}`)
        // second we're going to transition from / to /store/:storeId
        //  this.context.router.push(`/store/${storeId}`);
    }

    render() {

        const logout = <button onClick={this.logout}>Log Out!</button>;
        if (!this.state.uid) {
            return <div>{this.renderLogin()}</div>
        }
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry you aren't the owner of this store!</p>
                    {logout}
                </div>
            )
        }
        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <div className="left-nav">

                        <nav>
                            <ul className="c-list-icon">
                                {Object.keys(this.state.pages).map(key => <LeftMenuPage key={key} details={this.state.pages[key]}/>)
}
                            </ul>
                        </nav>
                        {logout}

                    </div>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs/>
                </div>
                <div className="off-canvas_right">
                    <RightPanel {...this.props}/>
                </div>
            </div>
        )
    }
}

export default App;
