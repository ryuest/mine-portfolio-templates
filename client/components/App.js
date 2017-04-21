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

    componentWillMount() {

    }

    render() {
      const { players } = this.props;



        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <div className="left-nav">
                        <nav>
                            <ul className="c-list-icon">
                                {Object.keys(this.state.pages).map(key => <LeftMenuPage key={key} details={this.state.pages[key]}/>)
}
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs/>
                    
                </div>
                <div className="off-canvas_right">
                    <RightPanel {...this.props}/>
                </div>
            </div>
        )
    }
}

export default App;
