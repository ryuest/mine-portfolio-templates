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
        this.getComponent = this.getComponent.bind(this);
        this.addToSelectionBetSlip = this.addToSelectionBetSlip.bind(this);

        this.state = {
            pages: navPages,
            isSelected: false,
            selections: {}
        }

    }

    addToSelectionBetSlip(key) {
    // take a copy of our state
    const selections = {...this.state.selections};
    // update or add the new number of fish ordered
    selections[key] = selections[key] + 1 || 1;
    // update our state
    this.setState({ selections });
    }

    getComponent(event, selectionID) {
      // take a copy of our state
      const selections = {...this.state.selections};
      // update or add the new number of fish ordered
      selections[selectionID] = selections[selectionID] + 1 || 1;
      // update our state
    //  console.log("selections[index] :"+selections[index])
      console.log("selections :"+selections)
      console.log("selections[selectionID] :"+selections[selectionID])
        var isSelected = this.state.isSelected;
        if (!isSelected && selections[selectionID] != null) {
            console.log('li item clicked! to TRUE');
            event.currentTarget.style.backgroundColor = '#4DFF33';
            this.setState({isSelected: true});
            this.setState({ selections });

        } else {
            console.log('li item clicked! to FALSE');
            event.currentTarget.style.backgroundColor = '#dadfe5';
            delete selections[selectionID];
            this.setState({ selections });
            if (selections[selectionID] == null) {
            this.setState({isSelected: false});
            }
        }
    }

    componentWillMount() {

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
                    getComponent={this.getComponent}
                    addToOrder={this.addToOrder} />

                </div>
                <div className="off-canvas_right">
                    <RightPanel {...this.props}/>
                </div>
            </div>
        )
    }
}

export default App;
