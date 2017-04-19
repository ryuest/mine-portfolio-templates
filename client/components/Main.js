import React from 'react';
import { Component } from 'react';
import {SpeechLoaders} from './SpeechLoaders';

export default class Main extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}

      </div>
    );
  }
}
//<SpeechLoaders fetchSpeech={fetchSpeech} speechKeys={speechKeys}/>
