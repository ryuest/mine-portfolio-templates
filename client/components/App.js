import React from 'react';
import LeftMenuPage from './LeftMenuPage';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import navPages from '../data/navPages';
import base from '../data/base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as actionCreators from '../actions/sagas'; //rootSaga
import { rootSaga } from '../actions/sagas';

class App extends React.Component {
  constructor(props) {
    super(props);

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
                  {
                    Object
                      .keys(this.state.pages)
                      .map(key => <LeftMenuPage key={key} details={this.state.pages[key]} />)
                  }
                </ul>
            </nav>
        </div>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs />
                </div>
                <div className="off-canvas_right">
                    <RightPanel {...this.props}/>
                </div>
            </div>
        )
    }
}

export default App;
