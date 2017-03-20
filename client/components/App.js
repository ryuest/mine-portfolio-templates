import React from 'react';
import LeftNavigation from './LeftNavigation';
import CenterTabs from './CenterTabs';

const App = React.createClass({
    render() {
        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <LeftNavigation/>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs/>
                </div>
            </div>
        )
    }
});

export default App;
