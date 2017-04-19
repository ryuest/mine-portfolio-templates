import React from 'react';
import LeftMenuPage from './LeftMenuPage';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import navPages from '../data/navPages';
//import * as actionCreators from '../actions/sagas'; //rootSaga
import samplePosts from '../data/posts';
import events from '../data/events';
import posts from '../data/posts';
import pages from '../data/navPages';
import competitions from '../data/competitions';

import { ReenactorContainer } from '../components_dd/reenactor';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: navPages,
            fishes: samplePosts
        }
    }



    componentWillMount() {
        // this runs right before the <App> is rendered
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
