import React from 'react';
import events from '../data/events';
import eventsInplay from '../data/events';
import competitions from '../data/competitions';

class Selection extends React.Component {
  constructor() {
    super();
    this.state = {
     isSelected: false,
     isCleared: false
   }
  }

  addToSelectedList(selection) {
    if (!this.state.isSelected) {
    //  selection.isSelected = true
      this.setState({
        isSelected: true
      });
  //    console.log('GOnna make some ADD selection! 🎣' + selection.id + selection.isSelected);
      this.props.getSelection(selection)
      if (this.props.betslip.receipt) {
        this.props.disableReceipt()
      }
    } else {
      this.setState({
        isSelected: false
      });
    //  console.log('GOnna make some REMOVE selection! 🎣' + selection.id + selection.isSelected); //
      this.props.removeSelection(selection)
    }
  }

  clearSelected() {
    if (this.state.isSelected) {
    this.setState({
      isSelected: false
    });
      }
  }

  componentDidUpdate() {
    this.state.isCleared = this.props.selections.length === 0
    if (this.state.isCleared) {
      this.clearSelected()
    }
  }


  render() {
    const {selection} = this.props;
    return (
      <div className="market_selection">
        <button onClick={() => this.addToSelectedList(selection)}
          style={this.state.isSelected && !this.state.isCleared ? {background: '#36EA4C'} : {background: '#D6DCD7'}}
          id={selection.id} className="betbutton" data-displayed="data-displayed2 from JSON"
          data-status="data-status from JSON">
          <span className="betbutton_odds">{selection.price}</span>
          <span className="icon"></span>
        </button>
      </div>
    )
  }
}

const Market = React.createClass({
  render() {
    const {market} = this.props;
    return (
      <div id={market.id} className="market_actions" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
        {market.selections.map((selection, i) => <Selection key={i} selection={selection} getSelection={this.props.getSelection}
          removeSelection={this.props.removeSelection}
          selections={this.props.selections}
          betslip={this.props.betslip}
          disableReceipt={this.props.disableReceipt}/>)}
      </div>
    )
  }
});

class Event extends React.Component {
  render() {
    const {details} = this.props;
    return (
      <div className="event">
        <div className="market">
          <div className="market_content">
            <ul className="btmarket__content-marginrs">
              <li>
                <a title={details.name} className="market_name" href="/TODO">
                  <div className="market_link-name">
                    <span>{details.nameTeam1}</span>
                    <span>{details.nameTeam2}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {details.markets.map((market, i) => <Market
            key={i}
            market={market}
            getSelection={this.props.getSelection}
            removeSelection={this.props.removeSelection}
            selections={this.props.selections}
            betslip={this.props.betslip}
            disableReceipt={this.props.disableReceipt}/>)}
        </div>
      </div>
    )
  }
}

function Sport(props) {
  return (
    <div className="sport-container">
      <header className="header-dropdown">
        <h2 className="fl">{props.sport}</h2>
        <div className="header_side">
          <aside className="header_toolbar">
            <a href="#" className="button-clear">
              <i className="icon-arrow-up-slim if-expanded"></i>
              <i className="icon-arrow-down-slim if-collapsed"></i>
            </a>
          </aside>
        </div>
      </header>
    </div>
  )
}

class CenterTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      competitions: competitions,
      events: events,
      eventsInplay: eventsInplay
    }
  }

  render() {
    return (
      <div className="tabs_panels">
        <div>
          <section id="tabs_panels-panel-in-play" data-panel="panel-in-play">
            <span>
              <section id="sectionheading-in-play">
                <h2 className="h1 fl">In-Play</h2>
                <Sport sport="Football"/>
                <section id="match-in-play" className="betgroup">
                  <div className="markets-group-container">
                    <div className="events-group-container">
                      <section id="market_wrapper-in-play">
                        {Object.keys(this.state.eventsInplay).map(key => <Event key={key}
                          details={this.state.eventsInplay[key]}
                          getSelection={this.props.getSelection}
                          removeSelection={this.props.removeSelection}
                          selections={this.props.selections}
                          betslip={this.props.betslip}
                          disableReceipt={this.props.disableReceipt}/>)}
                      </section>
                    </div>
                  </div>
                </section>
              </section>
            </span>
          </section>
        </div>
      </div>
    )
  }
}

CenterTabs.propTypes = {
  details: React.PropTypes.object
};

export default CenterTabs;
