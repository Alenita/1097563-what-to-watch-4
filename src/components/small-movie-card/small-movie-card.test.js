import React from "react";
import SmallMovieCard from "./small-movie-card.jsx";
import renderer from "react-test-renderer";

const film = {
  id: 109,
  title: `No Country for Old Men`,
  genre: `Thriller`,
  year: 2007,
  backgroundPoster: `https://placeimg.com/1300/512/nature`,
  poster: `https://pbs.twimg.com/media/EN6cAVzX4AIZT0W.jpg`,
  description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
  rating: 8.1,
  ratingCount: 870,
  director: `Ethan Coen, Joel Coen`,
  starring: `Tommy Lee Jones, Javier Bardem, Josh Brolin`,
  src: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  runTime: `2h 3m`,
};

it(`<MovieCard/> renders correctly`, () => {
  const tree = renderer
        .create(<SmallMovieCard
          film={film}
          onFilmCardClick={() => {}}
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
