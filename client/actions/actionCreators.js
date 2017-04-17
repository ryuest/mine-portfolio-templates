


// increment
export function increment(index) {
  return{
    type: 'INCREMENT_LIKES',
    index
  }
}

export function log() {
  return{
    type: 'LOG'
  }
}

/*
export const action = type => store.dispatch({type})

onIncrement={() => action('INCREMENT')}

submit({ location }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'FETCH_WEATHER',
        location,
        resolve,
        reject
      });
*/
// add comments
export function addComent(postId, author, comment) {
  return{
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove commnent
export function removeComment(postId, i) {
  return{
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
