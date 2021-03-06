import Axios from "axios";

const initialState = {
    userid: null,
    username: '',
    password: '',
    month: '',
    day: 0,
    year: 0
};

//constant strings
const GET_SESSION = 'GET_SESSION';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

//actions
export function getSession() {
    return {
        type: GET_SESSION,
        payload: Axios.get('/auth/user')
    };
};

export function registerUser(newUser) {
    return {
        type: REGISTER_USER,
        payload: Axios.post('/auth/register', newUser)
    };
};

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: Axios.post('/auth/login', user)
    };
};

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: Axios.post('/auth/logout')
    };
};

//reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${GET_SESSION}_FULFILLED`:
            return {
                ...state,
                userid: payload.data.userid,
                username: payload.data.username,
                password: payload.data.password
            };
        
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                userid: payload.data.userid,
                username: payload.data.username,
                password: payload.data.password
            };
        
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userid: payload.data.userid,
                username: payload.data.username,
                password: payload.data.password
            };
        
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                userid: null,
                username: '',
                password: ''
            };
        default: return state;
    };
};