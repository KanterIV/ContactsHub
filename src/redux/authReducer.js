import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  requestLogin,
  requestLogout,
  requestRefreshUser,
  requestRegistration,
  setToken,
} from 'utils/helpers/api';
import { toastFulfild, toastRejected } from 'utils/helpers/userNotifications';

export const newUserRegister = createAsyncThunk(
  'auth/register',
  async (newUserData, thunkAPI) => {
    try {
      const newUser = await requestRegistration(newUserData);
      toastFulfild('User successfully created! Please confirm your e-mail.');
      return newUser;
    } catch (error) {
      toastRejected('Something went wrong. We are already working on it!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const newUser = await requestLogin(userData);
      toastFulfild('You have successfully signed in !');
      return newUser;
    } catch (error) {
      toastRejected('Something went wrong. We are already working on it!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const authData = await requestRefreshUser();
      // toastFulfild('You have successfully signed in !');
      return authData;
    } catch (error) {
      toastRejected('Something went wrong. Please sign in again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await requestLogout();
      return;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    subscription: null,
    name: null,
    avatarURL: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(newUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(userRefresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })

      .addCase(userLogout.fulfilled, (state, action) => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          userLogout.pending,
          newUserRegister.pending,
          userLogin.pending,
          userRefresh.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          userLogout.rejected,
          newUserRegister.rejected,
          userLogin.rejected,
          userRefresh.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
