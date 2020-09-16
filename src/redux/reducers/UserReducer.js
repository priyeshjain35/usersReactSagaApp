import USERS_ACTION_TYPES from "../actionTypes/UserActionTypes";

const initialState = {
    loggedInUser: {},
    allUsers: [],
    selectedUser: {}
};

const UserReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case USERS_ACTION_TYPES.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                allUsers: payload
            }
        }
        case USERS_ACTION_TYPES.FETCH_USERS_FAILED: {
            return {
                ...state,
                allUsers: []
            }
        }
        case USERS_ACTION_TYPES.LOGGED_IN_SUCCESS: {
            return {
                ...state,
                loggedInUser: payload.user
            }
        }
        case USERS_ACTION_TYPES.SET_SELECTED_USER: {
            return {
                ...state,
                selectedUser: payload
            }
        }
        default: return state;
    }
}

export default UserReducer;