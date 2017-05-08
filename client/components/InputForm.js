
import actions from '../actions/actionCreators';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, Message } from 'semantic-ui-react';

class ContactForm extends Component {
//  this.props.getReceipt(data)
placeBetGetReceipt (data, selections) {
  console.log(data, selections)
  this.props.placeBet(data)
  this.props.getReceipt()
}

  render() {

    const {fields: {firstName, lastName, email}, handleSubmit, selections } = this.props;
    return (
      <form >
          {Object.keys(selections).map((key, i) => (<BetSlipSelection key={key} i={i} selection={selections[key]} />))}
          <div className="betslip-bet-actions">
              <button onClick={handleSubmit((data) => {this.placeBetGetReceipt(data, selections)})}>Place Bet</button>
          </div>
      </form>
    );
  }
}



//   <button type="submit">Submit</button>
class BetSlipSelection extends Component {

  renderInput ({ input, meta: { touched, error }, selection: { selection }, ...custom }) {
    return (
      <div>
    <Input
            placeholder="Location..."
            {...input}
            {...custom}
           />
    </div>
  );
  }

    RenderField ({ input, meta: { touched, error }, selection: { selection }, ...custom }) {
  return (
    <div>
      {<label htmlFor={input.id}></label>}
       <input {...input} placeholder="meta" type="text"/>
    </div>
  );
  }

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
                        <Field
                          name={"betStake_" + this.props.i}
                      //    component="input"
                          type="text"
                          component={this.renderInput}
                          selection={this.props.selection}
                      //    firstName={this.props.selection.selection.price}
                        />
                        <Field name={"betStake_" + this.props.i} id={this.props.selection.selection.id} {...this.props} component={this.RenderField}>
                          {this.props.children}
                        </Field>
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
  form: 'contact',  // a unique identifier for this form
  fields: ['firstName', 'lastName', 'email']
})(ContactForm)

export default ContactForm;
