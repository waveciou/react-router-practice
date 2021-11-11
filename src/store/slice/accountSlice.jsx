import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      const assignState = state;
      assignState.isLogin = action.payload;
    },
  },
});

export const { setLoginState } = accountSlice.actions;

export default accountSlice.reducer;