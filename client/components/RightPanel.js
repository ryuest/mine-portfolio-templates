import React from 'react';
import Game from '../simpleTests/game';
import store from '../store';
import Betslip from './Betslip';

class Likes extends React.Component {
    render() {
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                    <h2 className="fl">{this.props.posts[0].likes}</h2>
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
         isSelected: false,
         isReceipt: false
       }
}

render() {
  this.state.isSelected = this.props.selections.length > 0
  this.state.isReceipt = this.props.betslip.receipt
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
                    {this.state.isSelected || this.state.isReceipt > 0 ?
                      <Betslip selections={this.props.selections}
                               clearBets={this.props.clearBets}
                               getReceipt={this.props.getReceipt}
                               betslip={this.props.betslip}
                               disableReceipt={this.props.disableReceipt}
                               submitBet={this.props.submitBet}/> : null }
                </div>
                <div className="fb_tutorial">
                    <Game/>
                </div>
                <div className="photo-grid">
                    <Likes
                      log={this.props.log}
                      posts={this.props.posts}/>
                </div>
            </div>
        </div>
    )
}
}
export default RightPanel;
