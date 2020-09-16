import USERS_ACTION_TYPES from "../actionTypes/UserActionTypes";

export const getUsersRequest = (num) => ({
    type: USERS_ACTION_TYPES.FETCH_USERS_REQUEST,
    payload: {
        num
    }
});

export const fetchUsersSuccess = ({users}) => ({
    type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailed = () => ({
    type: USERS_ACTION_TYPES.FETCH_USERS_FAILED,
    payload: {}
});

export const loginUserRequest = (user) => ({
    type: USERS_ACTION_TYPES.LOGIN_IN_REQUEST,
    payload: {
        user
    }
});

export const loginUserSuccess = (payload) => {
    console.log(payload);
    return ({
        type: USERS_ACTION_TYPES.LOGGED_IN_SUCCESS,
        payload: payload
    })
};

export const setSelectedUser = (user) => ({
    type: USERS_ACTION_TYPES.SET_SELECTED_USER,
    payload: user
});