import UsersSaga from "./UsersSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        ...UsersSaga
    ]);
};