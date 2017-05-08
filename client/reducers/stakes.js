export default function(state = [], action) {
    switch (action.type) {
        case 'PLACE_BET':
            return [
                ...state, {
                betStake: action.betStake
              }
            ]
        default:
            return state;
    }
}
