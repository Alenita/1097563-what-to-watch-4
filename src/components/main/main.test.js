import React from "react";
import {Main} from "./main.jsx";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

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

const mockStore = configureStore([]);

const store = mockStore({
  films,
  filmInfo,
  currentGenre: `All_genres`,
  filteredList: films
});


it(`rendering is ok`, () => {
  const tree = renderer
        .create(
            <Provider store={store}>
              <Main
                filmInfo={filmInfo}
                films={films}
                onFilmTitleClick={() => {}}
                onFilmCardClick={() => {}}
              />
            </Provider>, {
              createNodeMock: () => {
                return {};
              }
            }).toJSON();

  expect(tree).toMatchSnapshot();
});
