// increment
export function increment(index) {
  return{
    type: 'INCREMENT_LIKES',
    index
  }
}

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
