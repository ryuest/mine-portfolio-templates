import React, {Component} from 'react';
import ContactForm  from './InputForm'

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
                    <ContactPage selections={this.props.selections} getReceipt={this.props.getReceipt} submitBet={this.props.submitBet}/>
                    <div className="betslip-bet-actions">
                        <button onClick={() => this.props.getReceipt()}>Place Bet</button>
                    </div>
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
                    ? <BetSlipReceipt disableReceipt={this.props.disableReceipt} />
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
                        <div className="betslip-receipt-selection_row">
                            <span id="receipt-event-time_1537584211L">03 May 2017 </span>
                            <span id="receipt-event-name_1537584211L">Monaco v Juventus </span>
                            <button id="closeButton" onClick={() => this.props.disableReceipt()}>X</button>
                            <div className="betslip-receipt-returns">
                                <div className="u-bold">
                                    <span className="u-padding-right-tiny">Stake
                                    </span>
                                    <span className="betslip-currency-symbol">£ 0.30</span>
                                </div>
                                <div className="betslip-receipt-returns_amount">
                                    <span className="betslip-receipt-returns_label">To return
                                    </span>
                                    <span className="betslip-currency-symbol">£ 0.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ContactPage extends React.Component {
  submit(values){
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} selections={this.props.selections} getReceipt={this.props.getReceipt} submitBet={this.props.submitBet}/>
    );
  }
}

export default Betslip;
