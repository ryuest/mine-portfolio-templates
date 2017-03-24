import React from 'react';

class LeftMenuPage extends React.Component {
    render() {
          const { details} = this.props;
        return (
          <li id={details.id}>
            <a className="c-list_item" href={details.href}>
              <span>{details.name}</span>
            </a>
          </li>
        )
    }
}

LeftMenuPage.propTypes = {
  details: React.PropTypes.object.isRequired
};

export default LeftMenuPage;

/*

*/
