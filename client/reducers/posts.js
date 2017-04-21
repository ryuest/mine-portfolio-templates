// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

export default function (state = { 'posts': ['posts': {'likes': 0}]}, action) {
    switch (action.type) {
            case 'FETCHED_POSTS':
                return {
                    ...state,
                    ...action.data,
                };
        default:
            return state;
    }
}

export function likez (state = [], action) {
    switch (action.type) {
      case 'INCREMENT_LIKES' :
      const i = action.index;
      return {
              ...state,
              loading: 4444,

      };
        default:
            return state;
    }
}

export const selectorsPost = {
    getPosts: (state) => state.posts,
};

/*

return [
  ...state.slice(0, i), // before the one we are updating
  {...state[i], likes: state[i].likes + 1},
  ...state.slice(i + 1), // after the one we are updating
]

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES' :
        const i = action.index;
          return [
            ...state.slice(0, i), // before the one we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), // after the one we are updating
          ]
        default:
            return state;
    }
    return state;
}

export default posts;
*/
