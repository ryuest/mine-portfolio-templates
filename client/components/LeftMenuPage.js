import React from 'react';

class LeftMenuPage extends React.Component {
  render() {
  //  const { details, index } = this.props;

    return (
      <li id="nav-homepage">
        <a className="c-list_item" href="/TODO">
          <span>Homepage</span>
        </a>
      </li>
    )
  }
}

export default LeftMenuPage;
