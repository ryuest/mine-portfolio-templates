import React from 'react';
import LeftNavigation from './LeftNavigation';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import sampleFishes from '../data/NavPages';
import base from '../data/base';

class App extends React.Component {
  constructor() {
    super();

        //this.addFish = this.addFish.bind(this);
        // this.removeFish = this.removeFish.bind(this);
        // this.updateFish = this.updateFish.bind(this);
        // this.loadSamples = this.loadSamples.bind(this);
        //this.addToOrder = this.addToOrder.bind(this);
        //this.removeFromOrder = this.removeFromOrder.bind(this);

        // HUY
        this.state = {
            fishes: {}
        }
    }

    componentWillMount() {
      // this runs right before the <App> is rendered
      this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
        context: this,
        state: 'fishes'
      });

      // check if there is any order in localStorage
      const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

      if(localStorageRef) {
        // update our App component's order state
        this.setState({
          order: JSON.parse(localStorageRef)
        });
      }

    }

    render() {
        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <LeftNavigation/>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs/>
                </div>
                <div className="off-canvas_right">
                    <RightPanel/>
                </div>
            </div>
        )
    }
}

export default App;
