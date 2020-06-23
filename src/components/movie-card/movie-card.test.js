import React from "react";
import MovieCard from "./movie-card.jsx";
import renderer from "react-test-renderer";

const film = {
  poster: `img/poster-1.jpg`,
  title: `The Lord of the Rings: The Return of the King`,
};

it(`<MovieCard/> renders correctly`, () => {
  const tree = renderer
        .create(<MovieCard
          film={film}
          onHover={() => {}}
          onCardClick={() => {}}
        />)
            .toJSON();

  expect(tree).toMatchSnapshot();
});
