

export default function(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state, {
                    user: action.author,
                    text: action.comment
                }
            ];
            case 'ADD_COMMENTZZ' :

            return {
                ...state,
                    counter: action.likes,

                }
                case "UPDATE_PLAYER_SCORE": {
                			const updatePlayerList = state.players.map((player, index) => {
                        if(index === action.index){
                          return {
                            ...player,
                             zz: player.score + action.score,
                           };
                        }
                        return player;
                      });
                			return {
                				...state,
                				zz: updatePlayerList
                			};
                		}

        case 'ADD_COMMENTZZ_old':
            const addPlayerList = [
                ...state.players, {
                    zz: action.name,
                    zz2: 0,
                }
            ];
            return {
                ...state,
                loading: addPlayerList
            };

        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwite this posts with a ne one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}
