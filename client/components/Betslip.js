import React, {Component} from 'react';
import BetSlipInputForm  from './InputForm'

class Betslip extends Component {
    constructor() {
        super();
        this.state = {
            isReceipt: false
        }
    }

    renderBetSlipWrapper() {
        return (
            <div>
                <header className="betslip-header">Singles</header>
                <div id="bets-container-singles">
                    <BetSlipInputForm selections={this.props.selections} getReceipt={this.props.getReceipt} placeBet={this.props.placeBet}/>
                    <div className="betslip-footer__sub__clearslip">
                        <a type="button" className="clear" onClick={() => this.props.clearBets()}>Clear Bet Slip</a>
                    </div>
                </div>
            </div>
        )
    }


    render() {
    this.state.isReceipt = this.props.betslip.receipt
        return (
            <div id="betslip-wrapper">
                { this.state.isReceipt > 0
                    ? <BetSlipReceipt disableReceipt={this.props.disableReceipt} stakes={this.props.stakes} />
                    : this.renderBetSlipWrapper()}
            </div>
        );
    }
}



class BetSlipReceipt extends Component {

    toReturn(stake, price) {
      return ((Number(stake)*eval(price))+Number(stake)).toFixed(2)
    }
    render() {
        return (
            <div className="betslip-content">
                <header className="betslip-header">
                    <div className="receipt-notice-box">
                        <em className="betslip-receipt_header-text">Bet Placed!</em>
                    </div>
                </header>
                <div className="betslip-receipt_details">
                    <h3 className="betslip-header">Singles</h3>
                    <div className="betslip-receipt-selection">
                        <div className="betslip-receipt-selection_row">
                            <span id="receipt-event-time_1537584211L">TIME TO-DO </span>
                            <span id="receipt-event-name_1537584211L">{this.props.stakes[0].betStake.selections[0].selection.name}</span>
                            <button id="closeButton" onClick={() => this.props.disableReceipt()}>X</button>
                            <div className="betslip-receipt-returns">
                                <div className="u-bold">
                                    <span className="u-padding-right-tiny">Stake </span>
                                    <span className="betslip-currency-symbol">£{this.props.stakes[0].betStake.stakes.betStake_0}</span>
                                </div>
                                <div className="betslip-receipt-returns_amount">
                                    <span className="betslip-receipt-returns_label">To return </span>
                                    <span className="betslip-currency-symbol">£{this.toReturn(this.props.stakes[0].betStake.stakes.betStake_0, this.props.stakes[0].betStake.selections[0].selection.price)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Betslip;
