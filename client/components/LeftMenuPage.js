import React from 'react'
import {Link} from 'react-router';

class LeftMenuPage extends React.Component {
    render() {
        const {details} = this.props;
        return (
            <li className="c-list_item" id={details.id}>
                <Link to={"/" + details.name}>
                    <strong>{details.name}</strong>
                </Link>
            </li>
        )
    }
}

LeftMenuPage.propTypes = {
    details: React.PropTypes.object.isRequired
};

export default LeftMenuPage;

/*
<li id={details.id}>
  <a className="c-list_item" href={details.href}>
    <span>{details.name}</span>
  </a>
*/
