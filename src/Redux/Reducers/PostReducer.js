import axios from 'axios';

const initialState = {
    feed: [],
    likes: []
}

//constant strings
const UPDATE_FEED = 'UPDATE_FEED';
const LIKE_POST = 'LIKE_POST';
// const UPDATE_USER_POSTS = 'UPDATE_USER_POSTS';
// const CREATE_POST = 'CREATE_POST';
// const DELETE_POST = 'DELETE_POST';
// const EDIT_POST = 'EDIT_POST';

export function updateFeed() {
    return {
        type: UPDATE_FEED,
        payload: axios.get('/api/feed')
    }
};

export function likePost(postid) {
    return {
        type: LIKE_POST,
        payload: axios.post('/api/posts/likes', {postid})
    }
};

// export function updateUserPosts(userid) {
//     return {
//         type: UPDATE_USER_POSTS,
//         payload: axios.get(`/api/posts/${userid}`)
//     }
// };

// export function createPost(post) {
//     return {
//         type: CREATE_POST,
//         payload: axios.post('/api/posts', post)
//     }
// };

// export function deletePost(postid) {
//     return {
//         type: DELETE_POST,
//         payload: axios.delete('/api/posts/', postid)
//     }
// };

// export function editPost(changes) {
//     return {
//         type: EDIT_POST,
//         payload: axios.put('/api/posts/', changes)
//     }
// };

export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case `${UPDATE_FEED}_FULFILLED`:
            return {
                ...state,
                feed: payload.data
            };

        case `${LIKE_POST}_FULFILLED`:
            return {
                ...state,
                likes: payload.data
            };

        // case `${UPDATE_USER_POSTS}_FULFILLED`:
        //     return {
        //         ...state,
        //         posts: payload.data
        //     };

        // case `${CREATE_POST}_FULFILLED`:
        //     return {
        //         ...state,
        //         posts: payload.data
        //     };

        // case `${DELETE_POST}_FULFILLED`:
        //     return {
        //         ...state,
        //         posts: payload.data
        //     };

        // case `${EDIT_POST}_FULFILLED`:
        //     return {
        //         ...state,
        //         posts: payload.data
        //     };

        default: return state;
    }
};