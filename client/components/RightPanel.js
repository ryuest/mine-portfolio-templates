import React from 'react';
import Game from '../simpleTests/game';



const RightPanel = React.createClass({
    render() {
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
                </div>
            </div>
        )
    }
});

export default RightPanel;
