import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import filmInfo from "./mocks/film-info.js";


ReactDOM.render(
    <App
      filmInfo={filmInfo}
      films={films} />,
    document.querySelector(`#root`)
);
