import React from "react";
import MovieCard from "./movie-card.jsx";
import renderer from "react-test-renderer";

const film = {
  id: 10,
  poster: `https://www.film.ru/sites/default/files/movies/posters/1610055-574057.jpg`,
  title: `Harry Potter - 1`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`<MovieCard/> renders correctly`, () => {
  const tree = renderer
        .create(<MovieCard
          film={film}
          onCardHover={() => {}}
          onCardLeave={() => {}}
          onFilmTitleClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
            .toJSON();

  expect(tree).toMatchSnapshot();
});
