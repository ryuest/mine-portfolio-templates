
const getSelection = (selection) => ({
    type: 'ADD_SELECTION',
    selection
});

const removeSelection = (selection) => ({
    type: 'REMOVE_SELECTION',
    selection
});

const clearBets = () => ({
    type: 'CLEAR_ALL_SELECTIONS'
});

const enableReceipt = () => ({
    type: 'ENABLE_RECEIPT'
});

const disableReceipt = () => ({
    type: 'DISABLE_RECEIPT'
});

const enableBetSlip = () => ({
    type: 'ENABLE_BETSLIP'
});

const disableBetSlip = () => ({
    type: 'DISABLE_BETSLIP'
});

const getReceipt = () => ({
    type: 'GET_RECEIPT'
});

const increment = (likes) => ({
    type: 'INCREMENT_LIKES',
    likes
});


const log = () => ({
    type: 'LOG'
});

// add comments
const addComent = (postId, author, comment) => ({
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
});

// remove commnent
const removeComment = (postId, i) => ({
    type: 'REMOVE_COMMENT',
    i,
    postId
});

const fetchPosts = () => ({
    type: 'FETCH_POSTS',
});

const fetchedPostsKeys = (posts) => ({
    type: 'FETCHED_POSTS',
    data: { posts },
});





export default {
    increment,
    fetchPosts,
    fetchedPostsKeys,
    enableReceipt,
    enableBetSlip,
    disableBetSlip,
    getSelection,
    removeSelection,
    clearBets,
    enableReceipt,
    disableReceipt,
    enableBetSlip,
    disableBetSlip,
    getReceipt,
    log

};
