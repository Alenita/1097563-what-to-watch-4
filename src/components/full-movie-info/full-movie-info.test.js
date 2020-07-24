import React from "react";
import FullMovieInfo from "./full-movie-info.jsx";
import renderer from "react-test-renderer";

const films = [
  {
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
  },
  {
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
  }
];

const filmInfo = {
  title: `No Country for Old Men`,
  genre: `Thriller`,
  year: 2007,
  backgroundPoster: `https://placeimg.com/1300/512/nature`,
  poster: `https://pbs.twimg.com/media/EN6cAVzX4AIZT0W.jpg`,
  id: 1,
  description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
  rating: 8.1,
  ratingCount: 870,
  director: `Ethan Coen, Joel Coen`,
  starring: `Tommy Lee Jones, Javier Bardem, Josh Brolin`,
  src: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  runTime: `2h 3m`,
};

const reviews = [
  {
    id: 234,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    reviewer: `Kate Muir`,
    reviewDate: `December 24, 2016`,
    rating: `8,9`
  },
  {
    id: 345,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    reviewer: `Bill Goodykoontz`,
    reviewDate: `November 18, 2015`,
    rating: `8,0`
  },
];

it(`rendering is ok`, () => {
  const tree = renderer
        .create(
            <FullMovieInfo
              reviews={reviews}
              filmInfo={filmInfo}
              films={films}
              onFilmTitleClick={() => {}}
              onFilmCardClick={() => {}}
            />, {
              createNodeMock: () => {
                return {};
              }
            }).toJSON();

  expect(tree).toMatchSnapshot();
});
