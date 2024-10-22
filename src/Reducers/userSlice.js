
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
