import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    updateForm: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
