import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  requestLogin,
  requestLogout,
  requestRefreshUser,
  requestRegistration,
  setToken,
} from 'services/api';

export const newUserRegister = createAsyncThunk(
  'auth/register',
  async (newUserData, thunkAPI) => {
    try {
      const newUser = await requestRegistration(newUserData);
      return newUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Something went wrong. We are already working on it', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          toastId: 'errorMessage',
        })
      );
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const newUser = await requestLogin(userData);
      return newUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Something went wrong. We are already working on it', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          toastId: 'errorMessage',
        })
      );
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

      return authData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Something went wrong. We are already working on it', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          toastId: 'errorMessage',
        })
      );
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
      return thunkAPI.rejectWithValue(
        toast.error('Something went wrong. We are already working on it', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          toastId: 'errorMessage',
        })
      );
    }
  }
);

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  // Имя слайса
  name: 'auth',
  // Начальное состояние редюсера слайса
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      //   .addCase(newUserRegister.pending, (state, action) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      .addCase(newUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      //   .addCase(newUserRegister.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   })
      //   .addCase(userLogin.pending, (state, action) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      //   .addCase(userLogin.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   })

      //   .addCase(userRefresh.pending, (state, action) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })
      //   .addCase(userRefresh.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   })

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

// Редюсер слайса
export const authReducer = authSlice.reducer;
