import {combineReducers, configureStore} from '@reduxjs/toolkit';
import BookReducer from './Reducers/BookReducer';

const reducers = combineReducers({
  Book: BookReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
