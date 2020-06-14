import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const filmInfo = {
  filmName: `The Green Mile`,
  genre: `Drama`,
  filmRelease: `1999`
};

const filmsList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App name={filmInfo.filmName} genre={filmInfo.genre} date={filmInfo.filmRelease} list={filmsList} />, document.querySelector(`#root`)
);
