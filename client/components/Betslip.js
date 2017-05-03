import React, {Component} from 'react';
//  <p>{JSON.stringify(this.props.selections)}</p>

class Betslip extends Component {
    render() {
        return (
            <div id="betslip-wrapper">
                <header className="betslip-header">Singles</header>
                <div id="bets-container-singles">
                      {Object.keys(this.props.selections).map((key) => (<BetSlipSelection key={key} selection={this.props.selections[key]}/>))}

                    <div className="betslip-bet-actions">
                        <button data-ng-click="placeBet()">Place Bet</button>
                    </div>
                    <div className="betslip-footer__sub__clearslip">
                        <a type="button" className="clear" data-ng-click="clearSlip($event)">Clear Bet Slip</a>
                    </div>
                </div>
            </div>
        );
    }
}

class BetSlipSelection extends Component {

    render() {

        return (
            <div id={"single-bet_" + this.props.selection.selection.id} className="betslip-selection">
                <header>{this.props.selection.selection.eventName}</header>
                <div className="betslip-selection_content">
                    <span className="betslip-selection_event">
                        <em className="u-highlight">{this.props.selection.selection.name}</em>
                    </span>
                </div>
                <div className="betslip-selection_stake">
                    <span className="betslip-selection_input">
                        <input type="text" id={"stake-input_" + this.props.selection.selection.id}></input>
                    </span>
                </div>
                <div className="betslip-footer__totals">
                    <div className="betslip-footer__to-return">
                        <div className="betslip-footer__to-return-label">
                            To return:
                            <span className="betslip-footer__total-stake-price">
                                {this.props.selection.selection.price}
                                2.03</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Betslip;
