import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name, genre, date} = props;

  return (<Main name={name} genre={genre} date={date} />);
};

export default App;
