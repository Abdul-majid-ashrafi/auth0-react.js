import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILD } from '../types';

let initialState = {
    isLoggin: false,
    isLoading: false,
} 

function authReducer(auth = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {...auth, isLoggin: false, isLoading: true };
        case LOGIN_SUCCESS:
            return {...auth, isLoggin: true, isLoading: false };
        case LOGIN_FAILD:
            return {...auth, isLoggin: false, isLoading: false };
        default:
            return auth;
    }
}

export default authReducer;