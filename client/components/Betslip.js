import React, {Component} from 'react';
import BetSlipForm from './BetSlipForm'

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
                    <BetSlipForm selections={this.props.selections} getReceipt={this.props.getReceipt} placeBet={this.props.placeBet}/>
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
                {this.state.isReceipt > 0
                    ? <BetSlipReceipt disableReceipt={this.props.disableReceipt} stakes={this.props.stakes}/>
                    : this.renderBetSlipWrapper()}
            </div>
        );
    }
}

class BetSlipReceipt extends Component {

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
                        {Object.keys(this.props.stakes[this.props.stakes.length - 1].betStake.stakes).map(key =>
                          <BetPlacedSelectionRow
                          key={key}
                          disableReceipt={this.props.disableReceipt}
                          stakes=    {this.props.stakes[this.props.stakes.length - 1].betStake.stakes[key]}
                          selections={this.props.stakes[this.props.stakes.length - 1].betStake.selections[key]} />)}
                    </div>
                </div>
            </div>
        );
    }
}

class BetPlacedSelectionRow extends Component {

    toReturn(stake, price) {
        return ((Number(stake) * eval(price)) + Number(stake)).toFixed(2)
    }

    showBetTime() {
        const date = new Date();
        // gets the hours
        var hours = date.getHours();
        // gets the day
        var days = date.getDay();
        // gets the month
        var minutes = date.getMinutes();
        // gets AM/PM
        var ampm = hours >= 12
            ? 'pm'
            : 'am';
        // converts hours to 12 hour instead of 24 hour
        hours = hours % 12;
        // converts 0 (midnight) to 12
        hours = hours
            ? hours
            : 12; // the hour '0' should be '12'
        // converts minutes to have leading 0
        minutes = minutes < 10
            ? '0' + minutes
            : minutes;
        // the time string
        var time = hours + ':' + minutes + ' ' + ampm;
        // gets the match for the date string we want
        var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
        //the result
        return match[0] + ' ' + time;
        console.log(betTime)
        return betTime;
    }
    render() {
        return (
            <div className="betslip-receipt-selection_row">
                <div>
                    <span id="receipt-event-time_1537584211L">{this.showBetTime()}
                    </span>
                </div>
                <div>
                    <span id="receipt-event-name_1537584211L">{this.props.selections.selection.name}</span>
                </div>
                <button id="closeButton" onClick={() => this.props.disableReceipt()}>X</button>
                <div className="betslip-receipt-returns">
                    <div className="u-bold">
                        <span className="u-padding-right-tiny">Stake
                        </span>
                        <span className="betslip-currency-symbol">£{this.props.stakes}</span>
                    </div>
                    <div className="betslip-receipt-returns_amount">
                        <span className="betslip-receipt-returns_label">To return
                        </span>
                        <span className="betslip-currency-symbol">£{this.toReturn(this.props.stakes, this.props.selections.selection.price)}</span>
                    </div>
                </div>
            </div>
          )
        }
      }
/*
<span className="betslip-currency-symbol">£{this.props.stakes[0].betStake.stakes.betStake_0}</span>
</div>
<div className="betslip-receipt-returns_amount">
<span className="betslip-receipt-returns_label">To return
</span>
<span className="betslip-currency-symbol">£{this.toReturn(this.props.stakes[0].betStake.stakes.betStake_0, this.props.stakes[0].betStake.selections[0].selection.price)}</span>
</div>
</div>
*/
        export default Betslip;
