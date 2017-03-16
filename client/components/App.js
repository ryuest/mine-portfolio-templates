import React from 'react';
import LeftNavigation from './LeftNavigation';
import CenterTabs from './CenterTabs';

const App = React.createClass({
render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <ul className="list-of-fishes">
          </ul>
        </div>
        <LeftNavigation  />
        <CenterTabs   />
      </div>
    )
  }
});

export default App;
