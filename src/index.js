import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import store from "./store";
//just importing so that it can run

//store.dispatch({ type: "account/payloan" });
//console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* to provider values to react components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
