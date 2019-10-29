import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './modules/utils/createReducer';
import { middleware as epicMiddleware } from './modules/utils/createEpic';
import multi from "redux-multi";
import createSocketIoMiddleware from "redux-socket.io";
import socket from "./shared/sockets";

const store = createStore(
  reducer,
  applyMiddleware( 
    multi,
    epicMiddleware(),
    createLogger(),
    createSocketIoMiddleware(socket, "REQUEST_")
  ),
);

export default store;
