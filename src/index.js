import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const filmInfo = {
  filmName: `The Green Mile`,
  genre: `Drama`,
  filmRelease: `1999`
};

ReactDOM.render(
    <App name={filmInfo.filmName} genre={filmInfo.genre} date={filmInfo.filmRelease} />, document.querySelector(`#root`)
);
