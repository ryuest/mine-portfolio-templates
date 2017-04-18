import React from 'react';

export const SpeechLoaders = ({ speechKeys, fetchSpeech }) => (
    <div className="speechLoaders">
        {speechKeys.map((key) => (
            <button onClick={() => fetchSpeech(key)} key={key}>
                Fetch {key}
            </button>
        ))}
    </div>
);
