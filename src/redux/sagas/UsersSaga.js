import { call, put, takeEvery, fork } from "redux-saga/effects";
import * as userActions from "../actions/UserActions";
import USERS_ACTION_TYPES from "../actionTypes/UserActionTypes";
import * as userServices from "../../Services/UsersService";

function* getUsers({payload}) {
    try {
        const {num} = payload;
        const results = yield call(userServices.fetchUsersService, num);
        yield put(userActions.fetchUsersSuccess({
            users: results.data
        }));
    } catch (e) {
        console.log(e);
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(USERS_ACTION_TYPES.FETCH_USERS_REQUEST, getUsers);
}

function* loginUser({payload}) {
    try {
        const results = yield call(userServices.loginUserService, payload);
        yield put(userActions.loginUserSuccess({
            token: results.token,
            user: payload
        }));
    } catch(e) {
        console.log(e);
    }
}

function* watchLoginUserRequest() {
    yield takeEvery(USERS_ACTION_TYPES.LOGIN_IN_REQUEST, loginUser);
}

const UsersSaga = [
    fork(watchGetUsersRequest),
    fork(watchLoginUserRequest)
]

export default UsersSaga;