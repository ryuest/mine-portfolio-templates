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

const fetchSpeech = (speechKey) => ({
    type: 'FETCH_SPEECH',
    speechKey,
});

const fetchSpeechKeys = () => ({
    type: 'FETCH_SPEECH_KEYS',
});

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

export default {
    increment,
    log,
    fetchSpeech,
    fetchSpeechKeys,
    addComent,
    removeComment,
};
