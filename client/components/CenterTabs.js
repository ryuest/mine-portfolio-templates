import React from 'react';
import events from '../data/events';
import eventsInplay from '../data/events';
import competitions from '../data/competitions';

class Selection extends React.Component {
    constructor() {
        super();
    }

    addToSelection(event, selectionID) {
    event.preventDefault();
    console.log('GOnna make some selection! 🎣');
  //  const selectionID = {
  //    id: this.id,
  //      }
    this.props.getComponent(event, selectionID);
  //  this.fishForm.reset();
  }

    render() {
        const {selection} = this.props;
        const isAvailable = selection.isSelected === 'available';
        return (
            <div className="market_selection">
                <button onClick={(e) => this.addToSelection(e, selection.id)} id={selection.id} className="betbutton" data-displayed="data-displayed2 from JSON" data-status="data-status from JSON">
                    <span className="betbutton_odds">{selection.price}</span>
                    <span className="icon"></span>
                </button>
            </div>
        )
    }
}
//  onClick={this.props.getComponent}
//  <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>

const Market = React.createClass({
    render() {
        const {market} = this.props;
        return (
            <div id={market.id} className="market_actions" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
                {market.selections.map((selection, i) => <Selection key={i} selection={selection} getComponent={this.props.getComponent}/>)}
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
                    {details.markets.map((market, i) => <Market key={i} market={market} getComponent={this.props.getComponent}/>)}
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
                                                {Object.keys(this.state.eventsInplay).map(key => <Event
                                                  key={key} details={this.state.eventsInplay[key]}
                                                  getComponent={this.props.getComponent}
                                                />)}
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
