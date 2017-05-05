
import actions from '../actions/actionCreators';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
//  this.props.getReceipt(data)
zz (data) {
  console.log(data);
  this.props.getReceipt(data)
}
  render() {

    const { handleSubmit, selections } = this.props;
    return (
      <form onSubmit={handleSubmit}>
          {Object.keys(selections).map((key, i) => (<BetSlipSelection key={key} i={i} selection={selections[key]} submitBet={this.props.submitBet} />))}

        <button onClick={handleSubmit(data => {this.zz(data)})}>Submit</button>
      </form>
    );
  }
}

//   <button type="submit">Submit</button>
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
                        <Field name={"betStake_" + + this.props.i} component="input" type="text" id={"stake-input_" + this.props.selection.selection.id}/>
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

ContactForm = reduxForm({
  form: 'contact'  // a unique identifier for this form
})(ContactForm)

export default ContactForm;
