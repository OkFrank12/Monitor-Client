import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {} || null,
  user: {} || null,
  toggle: false,
  newToggle: false,
};

const reduxStates = createSlice({
  name: "states",
  initialState,
  reducers: {
    onAdminState: (state, { payload }) => {
      state.admin = payload;
    },
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onToggleStateNew: (state, { payload }) => {
      state.newToggle = payload;
    },
    onAdminLogOut: (state) => {
      state.admin = null;
    },
    onUserLogOut: (state) => {
      state.user = null;
    },
  },
});

export const {
  onAdminState,
  onUserState,
  onAdminLogOut,
  onToggleState,
  onUserLogOut,
  onToggleStateNew,
} = reduxStates.actions;

export default reduxStates.reducer;
