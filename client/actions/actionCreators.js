// increment
/*
export function increment(index) {
  return{
    type: 'INCREMENT_LIKES',
    index
  }
}
*/
const increment = () => ({
    type: 'INCREMENT_LIKES',
});

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
    fetchPosts,
    fetchedPostsKeys,
    fetchSpeechKeys,
    fetchedSpeechKeys,
};
