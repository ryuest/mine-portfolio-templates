import React from 'react';
import Game from '../simpleTests/game';
import Counter from './Counter';
import store from '../store';
import Betslip from './Betslip';

class Likes extends React.Component {
    render() {
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                    <h2 className="fl">{this.props.nol}</h2>
                    <button onClick={() => this.props.log()} className="likes">&hearts; {this.props.posts[0].likes}</button>
                </header>
            </div>
        )
    }
}

class RightPanel extends React.Component {
    constructor() {
        super();
        this.state = {
         isSelected: false
       }
}

render() {
  this.state.isSelected = this.props.selections.length > 0
  console.log(this.state.isSelected)
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
                    {this.state.isSelected > 0 ? <Betslip selections={this.props.selections} /> : null }
                </div>
                <div className="fb_tutorial">
                    <Game/>
                </div>
                <div className="photo-grid">
                    <Likes i={4} {...this.props}/>
                </div>

            </div>
        </div>
    )
}
}
export default RightPanel;

//<div><button onClick={() => this.props.increment(this.props.posts[1].likes)} className="counter">Increment={this.props.posts[1].likes}</button></div>
