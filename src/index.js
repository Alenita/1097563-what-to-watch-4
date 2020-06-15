import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const filmInfo = {
  filmName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  filmRelease: `2014`
};

const filmsList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App name={filmInfo.filmName} genre={filmInfo.genre} date={filmInfo.filmRelease} list={filmsList} />, document.querySelector(`#root`)
);
