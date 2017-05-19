import React, { Component } from 'react';
import GameXO from '../simpleTests/gameXO';

class Game extends Component {
render() {
    return (
      <div>
        <h3>Details for: TO-DO</h3>
        <div className="fb_tutorial">
            <GameXO/>
        </div>
        <div className="photo-grid">
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
            <div className="sport-container">
                <header className="header-dropdown">
                    <h2 className="fl">{this.props.posts[0].likes}</h2>
                    <button onClick={() => this.props.log()} className="likes">&hearts; {this.props.posts[0].likes}</button>
                </header>
            </div>
        )
    }
}

export default Game;
