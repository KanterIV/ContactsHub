import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';
import { authReducer } from './authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
