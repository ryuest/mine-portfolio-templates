import React from 'react';
import events from '../data/events';
import competitions from '../data/competitions';

const Selection = React.createClass({
  render() {
const { details } = this.props;
      return (
        <div className="market_selection">
            <button id={details.id} className="betbutton" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
                <span className="betbutton_odds">{details.price}</span>
                <span className="icon"></span>
            </button>
        </div>
      )
  }
});

const Market = React.createClass({
  render() {
const { details } = this.props;
      return (
        <div id={details.id} className="market_actions" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
          <Selection details={details.selection1} />
          <Selection details={details.selection2} />
          <Selection details={details.selection3} />
        </div>
      )
  }
});

//   {Object.keys(this.state.events).map(key => <Selection key={key} details={this.state.events.market.selection[key]}/>)}

class Event extends React.Component {
    render() {
const { details} = this.props;
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
            <Market details={details.market} />
            </div>
        </div>
    )
}
}
// <Market details={details} />
//{...this.props} key={i} i={i} market={market} />)}
// {Object.keys(this.state.events).map(key => <Market key={key} details={this.state.events.market[key]}/>)}

//   {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}

class CenterTabs extends React.Component {
    constructor() {
        super();

        this.state = {
            competitions: competitions,
            events: events
        }
    }

    render() {
        return (
            <div className="tabs_panels">
                <section className="tabs_panels-panel" data-panel="panel-in-play">
                    <span>
                        <div className="sectionheading">
                            <h2 className="h1 fl">In-Play</h2>
                        </div>
                        <section className="inplay">
                            <div id="sport-events"></div>
                        </section>
                    </span>
                </section>

                <section className="tabs_panels-panel" data-panel="panel-highlights">
                    <span>
                        <section className="sectionheading">
                            <h2 className="h1 cap">Highlights</h2>
                        </section>
                        <div className="sport-container">
                            <header className="header-dropdown">
                                <h2 className="fl">Football</h2>
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
                        <section id="match-highlights" className="betgroup">
                            <div className="markets-group-container">
                                <header className="header-dropdown">
                                    <h2 className="fl">90 Minutes</h2>
                                    <div className="header_side">
                                        <aside className="header_toolbar">
                                            <a href="#" className="button-clear">
                                                <i className="icon-arrow-up-slim if-expanded"></i>
                                                <i className="icon-arrow-down-slim if-collapsed"></i>
                                            </a>
                                        </aside>
                                    </div>
                                </header>
                                <div className="events-group-container">
                                    <section className="market_wrapper">
                                        {Object.keys(this.state.events).map(key => <Event key={key} details={this.state.events[key]}/>)}
                                    </section>
                                </div>
                            </div>
                        </section>
                    </span>
                </section>
            </div>
        )
    }
}

CenterTabs.propTypes = {
  details: React.PropTypes.object
};

export default CenterTabs;
