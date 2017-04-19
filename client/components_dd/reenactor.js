import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions/actionCreators';
import { selectors } from '../reducers/speech';

import { SpeechControls } from './speech_controls';
import { SpeechLoaders } from '../components/SpeechLoaders';
import { Speech } from './speech';

export const Reenactor = ({ speechKeys, phrases, loading, fetchSpeech, playSpeech, reset }) => {
    let controls = 'Loading...';
    if (phrases !== undefined) {
        controls = <SpeechControls playSpeech={playSpeech} reset={reset} />;
    } else if (speechKeys !== undefined) {
        controls = (
            <SpeechLoaders
                fetchSpeech={fetchSpeech}
                loading={!!loading}
                speechKeys={speechKeys}
            />
        );
    }

    return (
        <div className="reenactor">
            <h1>React Re-enact</h1>
            <div className="options">
                {controls}
            </div>
            <Speech phrases={phrases} />
        </div>
    );
};



const mapStateToProps = (state) => ({
    speechKeys: selectors.getSpeechKeys(state),
    phrases: selectors.getDisplayedPhrases(state),
    loading: selectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchSpeech: (key) => dispatch(actions.fetchSpeech(key)),
    playSpeech: () => dispatch(actions.playSpeech()),
    reset: () => dispatch(actions.reset()),
});

export const ReenactorContainer = connect(mapStateToProps, mapDispatchToProps)(Reenactor);
