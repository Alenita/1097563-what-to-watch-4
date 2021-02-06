import React from "react";
import Catalog from "../catalog/catalog.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import Footer from "../footer/footer.jsx";

const Main = () => {
  return (<React.Fragment>
    <MovieCard />
    <div className="page-content">
      <Catalog />
      <Footer />
    </div>
  </React.Fragment>);
};

export default Main;

