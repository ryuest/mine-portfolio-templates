import React, {Component} from 'react';

class Betslip extends Component {
    render() {
        return (
            <div id="betslip-wrapper">
                <header className="betslip-header">Singles</header>
                <div id="bets-container-singles">
                    <div id="single-bet_1540236268L" className="betslip-selection">
                        <header>Warriors Reserves @ 2/11</header>
                        <div className="betslip-selection_content">
                            <span className="betslip-selection_event">
                                <em className="u-highlight">Warriors Reserves v Hougang United Reserves</em>
                            </span>
                        </div>
                        <div className="betslip-selection_stake">
                            <span className="betslip-selection_input">
                                <input type="text" id="stake-input_1540236268L"></input>
                            </span>
                        </div>
                        <div className="betslip-footer__totals">
                            <div className="betslip-footer__to-return">
                                <div className="betslip-footer__to-return-label">
                                    To return:
                                    <span className="betslip-footer__total-stake-price">
                                        2.03</span>
                                </div>
                            </div>
                        </div>
                        <div className="betslip-bet-actions">
                            <button data-ng-click="placeBet()">Place Bet</button>
                        </div>
                        <div className="betslip-footer__sub__clearslip">
                            <a type="button" className="clear" data-ng-click="clearSlip($event)">Clear Bet Slip</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Betslip;
