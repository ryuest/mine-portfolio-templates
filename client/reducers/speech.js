export default function (state = { }, action) {
    switch (action.type) {
        case 'FETCHED_SPEECH_KEYS':

              return {
                  ...state,
                  ...action.data.speechKeys

              };

        default:
            return state;
    }
}

export const selectors = {
    getSpeechKeys: (state) => state.speechKeys,
};



/*


*/
