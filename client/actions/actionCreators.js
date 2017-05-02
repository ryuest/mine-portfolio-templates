
export function getSelection(selection) {
  return{
    type: 'ADD_SELECTION',
    selection
  }
}

export function removeSelection(selection) {
  return{
    type: 'REMOVE_SELECTION',
    selection
  }
}

export function increment(likes) {
  return{
    type: 'INCREMENT_LIKES',
    likes
  }
}


export function log() {
  return{
    type: 'LOG'
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

const fetchPosts = () => ({
    type: 'FETCH_POSTS',
});

const fetchedPostsKeys = (posts) => ({
    type: 'FETCHED_POSTS',
    data: { posts },
});

const fetchSpeechKeys = () => ({
    type: 'FETCH_SPEECH_KEYS',
});

const fetchedSpeechKeys = (speechKeys) => ({
    type: 'FETCHED_SPEECH_KEYS',
    data: { speechKeys },
});




export default {
    increment,
    fetchPosts,
    fetchedPostsKeys,
    fetchSpeechKeys,
    fetchedSpeechKeys,
};
