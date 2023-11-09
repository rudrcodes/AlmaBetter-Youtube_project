import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSubscribersArray: [],
};

const allSubscribers = createSlice({
  name: "allSubscribers",
  initialState,
  reducers: {
    setAllSubscriber: (state, action) => {
      state.allSubscribersArray = action.payload;
    },
  },
});

export default allSubscribers.reducer;
export const { setAllSubscriber } = allSubscribers.actions;
