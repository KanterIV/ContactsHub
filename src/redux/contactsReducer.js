import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteNewContact,
  fetchAllContacts,
} from 'utils/helpers/api';
import { toastFulfild, toastRejected } from 'utils/helpers/userNotifications';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts;
    } catch (error) {
      toastRejected("Unable to retrieve your contacts. We're working on it!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await addNewContact(newContact);
      toastFulfild('Your contact has been successfully added !');
      return contact;
    } catch (error) {
      toastRejected('Something went wrong. We are already working on it!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await deleteNewContact(contactId);
      toastFulfild('The contact has been successfully deleted !');
      return contactId;
    } catch (error) {
      toastRejected('Something went wrong. We are already working on it!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          item => item._id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          deleteContact.pending,
          fetchContacts.pending,
          addContact.pending
        ),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteContact.rejected,
          fetchContacts.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      );
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
