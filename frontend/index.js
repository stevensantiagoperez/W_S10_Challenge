import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/store"; // Ensure this path is correct
import App from "./components/App";
import './styles/reset.css'
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
<<<<<<< HEAD
);
=======
);
>>>>>>> 9bc8fd3b8337318cd1127ddf5f2aee2aada96bd5
