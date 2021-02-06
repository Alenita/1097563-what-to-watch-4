import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
