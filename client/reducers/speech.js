export default function (state = { }, action) {
    switch (action.type) {
        case 'FETCH_SPEECH':
            return {
                ...state,
                currentSpeech: action.speechKey,
                allPhrases: [],
                displayedPhrases: [],
                loading: true,
            };
        default:
            return state;
    }
}

export const selectors = {
    getSpeechKeys: (state) => state.speechKeys,
};
