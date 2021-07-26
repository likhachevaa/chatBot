
import { combineReducers } from "redux";
import chatsReducer from './chats';
import messagesReducer from './messages';
import contactsReducer from './contacts';
import userReducer from './user';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ userReducer, messagesReducer, chatsReducer, contactsReducer, router: connectRouter(history) });