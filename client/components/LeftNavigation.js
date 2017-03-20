import React from 'react';

const LeftNavigation = React.createClass({
    render() {
        return (
            <div className="left-nav">
              <nav>
                <ul className="c-list-icon">
                  <li id="nav-homepage">
                    <a className="c-list_item" href="/TODO">
                      <span>Homepage</span>
                    </a>
                  </li>
                  <li id="nav-in-play">
                    <a className="c-list_item" href="/TODO">
                      <span>InPlay</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        )
    }
});

export default LeftNavigation;
