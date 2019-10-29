import io from 'socket.io-client';
import {SOCKET_SERVER_IP} from '../constants'
import { Observable } from 'rxjs/Rx';

let normalSocket = io(SOCKET_SERVER_IP);

export const socket$ = Observable.of(io(SOCKET_SERVER_IP));

export default normalSocket;