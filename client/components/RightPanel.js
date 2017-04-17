import React from 'react';
import Game from '../simpleTests/game';
import Counter from './Counter';
import store from '../store'

class Likes extends React.Component {
    render() {
      const { post} = this.props;
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                    <h2 className="fl">{post.likes}</h2>
                      <button onClick={this.props.increment.bind(null, 0)} className="likes">&hearts; {post.likes}</button>
                      <button onClick={this.props.log} className="likes">&hearts; {post.likes}</button>
                </header>
            </div>
        )
    }
}

//<button onClick={this.props.increment.bind(null, 0)} className="likes">&hearts; {post.likes}</button>

//store.subscribe(Counter)

const RightPanel = React.createClass({

    render() {
      const post = this.props.posts[0];
      const counter = this.props.counter;
      const action = type => store.dispatch({type})
        return (
            <div className="betslipwrapper">
                <div className="betslip-container">
                    <div className="betslip-section">
                        <nav className="betslip-navigation">
                            <ul className="betslip-navigation_menu">
                                <li id="betslip-tab" className="betslip-navigation_menu-item">
                                    <a className="betslip-navigation_menu-link" href="/TODO">
                                        <span className="betslip-navigation_menu-text">Bet Slip</span>
                                    </a>
                                </li>
                                <li id="openbets-tab" className="betslip-navigation_menu-item">
                                    <a className="betslip-navigation_menu-link" href="/TODO">
                                        <span className="betslip-navigation_menu-text">Open Bets</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="fb_tutorial">
                        <Game/>
                    </div>
                    <div className="photo-grid">
                      <Likes i={0} post={post} {...this.props} />
                      <Counter
                        value={counter}
                        onIncrement={() => action('INCREMENT')}
                        onDecrement={() => action('DECREMENT')}
                        onIncrementAsync={() => action('INCREMENT_ASYNC')}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default RightPanel;
