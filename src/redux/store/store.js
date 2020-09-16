import { createStore } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { sagaMiddleware } from "../middleware/StoreMiddleware";
import storeMiddleware from "../middleware/StoreMiddleware";

const store = createStore(rootReducer, storeMiddleware);

sagaMiddleware.run(rootSaga);

export default store;