import { configureStore } from "@reduxjs/toolkit";
import AllSubscriberReducer from "./Features/AllSubscriber";

export const store = configureStore({
  reducer: {
    allSubscribers: AllSubscriberReducer,
  },
});
