export default function(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state, {
                    user: action.author,
                    text: action.comment
                }
            ];
        case 'ADD_COMMENTZZ': {
            const updatePlayerList = state.todos.map((todo, index) => {
              
                  console.log(todo.text)
                    return {
                        ...todo,
                        text: "updatePlayerList",
                        user: "updatePlayerList"
                      };

                 });
           			return {
           				...state,
           				todos: updatePlayerList
           			}
           		}


        case 'ADD_COMMENTZZ_old':
            const addPlayerList = [
                ...state.players, {
                    zz: action.name,
                    zz2: 0
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

/*
    return {
        todos: [
            ...state.todos, {
                text: "zz",
                user: "ww  "
            }
        ]

    }
    */
