import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

Enzyme.configure({
  adapter: new Adapter(),
});

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


describe(`Main component works properly`, () => {
  it(`Film title is pressed`, () => {
    const onFilmTitleClick = jest.fn();
    const onFilmCardClick = jest.fn();

    const main = mount(
        <Provider store={store}>
          <Main
            filmInfo={filmInfo}
            films={films}
            onFilmTitleClick={onFilmTitleClick}
            onFilmCardClick={onFilmCardClick}
          />
        </Provider>
    );

    const filmTitle = main.find(`h3.small-movie-card__title`).first();
    filmTitle.simulate(`click`, {
      preventDefault: () => {}
    });

    expect(onFilmTitleClick.mock.calls.length).toBe(1);
  });
});

