export default function (state = { 'posts': ['posts': {'likes': 0}]}, action) {
    switch (action.type) {
            case 'FETCHED_POSTS':
                return {
                    ...state,
                    ...action.data,
                };
                case 'INCREMENT_LIKES':
                const i = action.index;
                console.log("state[i].likes")
                console.log(state)
                console.log(state.posts[0].likes)
                const removePlayerList = [

                  ...state.posts.slice(0, 0), // before the one we are updating
                  {...state.posts[0], likes: state.posts[0].likes + 1},
                  ...state.posts.slice(0 + 1), // after the one we are updating
			            ];
                  return {
                  ...state,
                  posts: removePlayerList
                  };
            default:
                  return state;
    }
}

export function likez (state = [], action) {
    switch (action.type) {
      case 'INCREMENT_LIKES22' :
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

case 'INCREMENT_LIKES':
const i = action.index;
console.log(state[i].likes)
console.log(state[i].posts)
return [
    ...state.slice(0, i), // before the one we are updating
    {...state[i], likes: state[i].likes + 1},
    ...state.slice(i + 1), // after the one we are updating
  ]

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
