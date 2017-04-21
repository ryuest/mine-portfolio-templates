import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/actionCreators';
import Header from '../components/Header';
import Player from '../components/Player';


class Scoreboard extends Component {


  render() {
    const { dispatch, players } = this.props;
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    /*
    console.log(...state.players)
    const playerComponents = player.players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
      />
    ));
    */
    return (
      <div className="scoreboard">
        
        <div className="players">

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);
