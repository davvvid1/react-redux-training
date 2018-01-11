import { combineReducers } from 'redux';

import BookReducer from './book.reducer'
import UserReducer from './user.reducer'

const rootReducer = combineReducers({
    book: BookReducer,
    user: UserReducer
});

export default rootReducer;
