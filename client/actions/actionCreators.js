import * as PlayerActionTypes from '../actiontypes/player';
// increment

export function increment(likes) {
  return{
    type: 'ADD_COMMENTZZ',
    likes
  }
}

export function incrementCounter() {
  return{
    type: 'INCREMENT'
  }
}

export const updatePlayerScore2 = (index, score)  => {
   return {
     type: "UPDATE_PLAYER_SCORE2",
     index,
     score
  };
};
/*
const increment = (index, likes, name) => ({
    type: 'ADD_COMMENTZZ',
    index,
    likes,
    name
});
*/
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

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name
  };
};

export const removePlayer = index => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index
  };
};

export const updatePlayerScore = (index, score)  => {
   return {
     type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
     index,
     score
  };
};

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index
  };
};




export default {
    increment,
    fetchPosts,
    fetchedPostsKeys,
    fetchSpeechKeys,
    fetchedSpeechKeys,
};
