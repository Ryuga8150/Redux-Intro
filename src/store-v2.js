import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//const store = createStore(rootReducer);

// HOW TO DO ASYNC OPS
// cannot do in components as they need to be pure
// so we use middleware for that
// here we use thunk middleware for that
// STEPS TO USE
// import
// apply in createStore
// return a function from action creator which will
// help the dispatch that we are using a middleware
//const store = createStore(rootReducer, applyMiddleware(thunk));

// To use REDUX DEVTOOLS
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
