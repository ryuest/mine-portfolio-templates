import React from 'react';
import LeftMenuPage from './LeftMenuPage';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import navPages from '../data/navPages';
import events from '../data/events';
import competitions from '../data/competitions';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: navPages
        }
    }

    render() {
        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <div className="left-nav">
                        <nav>
                            <ul className="c-list-icon">
                                {Object.keys(this.state.pages).map(key => <LeftMenuPage key={key} details={this.state.pages[key]}/>)}
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs
                      getSelection={this.props.getSelection}
                      selections={this.props.selections}
                      removeSelection={this.props.removeSelection}
                      betslip={this.props.betslip}
                      disableReceipt={this.props.disableReceipt}
                     />

                </div>
                <div className="off-canvas_right">
                    <RightPanel
                    selections={this.props.selections}
                    log={this.props.log}
                    posts={this.props.posts}
                    clearBets={this.props.clearBets}
                    getReceipt={this.props.getReceipt}
                    betslip={this.props.betslip}
                    disableReceipt={this.props.disableReceipt}
                    submitBet={this.props.submitBet}
                    />
                </div>
            </div>
        )
    }
}

export default App;
