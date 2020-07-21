import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import filmInfo from "./mocks/film-info.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmInfo={filmInfo}
        films={films}/>
    </Provider>,
    document.querySelector(`#root`)
);
