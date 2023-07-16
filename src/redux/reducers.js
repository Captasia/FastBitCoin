import { createSlice } from '@reduxjs/toolkit';

const loginState = {
  email: '',
  country: '',
  state: null,
  password: '',
  passwordConfirm: '',
};

const objectSlice = createSlice({
  name: 'object',
  initialState: loginState,
  reducers: {
    updateLanguage: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateState: (state, action) => {
      state.state = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload
    },
    updatePasswordConfirm: (state, action) => {
      state.passwordConfirm = action.payload
    },
    clearObject: () => {
      return initialState;
    },
  },
});

export const { updateLanguage, updateEmail, updateCountry, updateState, updatePassword, updatePasswordConfirm, clearObject } = objectSlice.actions;

export default objectSlice.reducer;
