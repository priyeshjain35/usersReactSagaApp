import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

export const sagaMiddleware = createSagaMiddleware();

let storeMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

export default storeMiddleware;