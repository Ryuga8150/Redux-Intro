//works as a wrapper around createStore
import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// Using MODERN REACT TOOLKIT
// modern can also work with classic redux

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

//With this react components will work as before
export default store;
