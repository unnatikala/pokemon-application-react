import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { reducers } from "./root";
import rootSaga from "../saga/root";

export const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
