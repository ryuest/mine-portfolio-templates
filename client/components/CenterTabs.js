import React from 'react';
import events from '../data/events';
import competitions from '../data/competitions';

function Selection() {
    return (
      <div className="market_selection">
          <button id="ID from JSON" className="betbutton" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
              <span className="betbutton_odds">1/2</span>
              <span className="icon"></span>
          </button>
      </div>
    );
}

function Market(key) {
  return (
    <div id="ID from JSON" className="market_actions" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
      {
        Object
          .keys(this.state.events)
          .map(key => <Selection key={key} details={this.state.events.market.selection[key]} />)
      }
    </div>
  )
}

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
                                        <div className="event">
                                            <div className="market">
                                                <div className="market_content">
                                                    <ul className="btmarket__content-marginrs">
                                                        <li>
                                                            <a title="title from JSON" className="market_name" href="/TODO">
                                                                <div className="market_link-name">
                                                                    <span>Man Utd</span>
                                                                    <span>Rostov</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="ID from JSON" className="market_actions" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
                                                    <div className="market_selection">
                                                        <button id="ID from JSON" className="betbutton" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
                                                            <span className="betbutton_odds">1/2</span>
                                                            <span className="icon"></span>
                                                        </button>
                                                    </div>
                                                    <div className="market_selection">
                                                        <button id="ID from JSON" className="betbutton" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
                                                            <span className="betbutton_odds">1/2</span>
                                                            <span className="icon"></span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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

  export default CenterTabs;
