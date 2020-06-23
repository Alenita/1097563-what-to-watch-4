import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";


const filmInfo = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

ReactDOM.render(
    <App
      filmInfo={filmInfo}
      films={films} />,
    document.querySelector(`#root`)
);
