import React, { PropTypes } from 'react';
import Stats from './Stats';

const Header = props => {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
    </div>
  );
};

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;
