import React, { Component } from 'react';
import GameXO from '../simpleTests/gameXO';

class Game extends Component {
render() {
    return (
      <div className="examples">
        <h3>The object of Tic Tac Toe is to get three in a row.
          You play on a three by three game board.
          The first player is known as X and the second is O.
          Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled.
          X always goes first, and in the event that no one has three in a row, the stalemate is called a cat game.</h3>
        <div className="example">
            <GameXO/>
        </div>
        <div className="example">
            <Likes
              log={this.props.log}
              posts={this.props.posts}/>
        </div>
      </div>
    );
  }
}

class Likes extends React.Component {
    render() {
        return (
            <div className="likes-container">
                    <h2 className="likes">Likes</h2>
                    <button onClick={() => this.props.log()} className="likes">&hearts; {this.props.posts[0].likes}</button>
            </div>
        )
    }
}

export default Game;
