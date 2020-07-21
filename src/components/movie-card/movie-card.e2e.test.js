import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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

describe(`Card is clicked`, () => {
  const onFilmTitleClick = jest.fn();
  const onFilmCardClick = jest.fn();
  const movieCard = shallow(
      <MovieCard
        film = {film}
        onFilmTitleClick={onFilmTitleClick}
        onFilmCardClick={onFilmCardClick}
        onCardHover={() => {}}
        onCardLeave={() => {}}
      />
  );

  it(`The card title is clicked, the function onFilmTitleClick is called`, () => {
    const title = movieCard.find(`.small-movie-card__title`);

    title.simulate(`click`, {
      preventDefault: () => {}
    });
    expect(onFilmTitleClick.mock.calls.length).toBe(1);
  });

  it(`The card is clicked, the function onCardClick is called`, () => {
    const card = movieCard.find(`.small-movie-card`);

    card.simulate(`click`, {
      preventDefault: () => {}
    });
    expect(onFilmCardClick.mock.calls.length).toBe(1);
  });
});


it(`The card is hovered`, () => {
  const onCardHover = jest.fn();
  const movieCard = shallow(
      <MovieCard
        film = {film}
        onFilmTitleClick={() => {}}
        onFilmCardClick={() => {}}
        onCardHover={onCardHover}
        onCardLeave={() => {}}
      />);
  const {id} = film;

  movieCard.simulate(`mouseenter`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toEqual(id);
});

it(`The card was left`, () => {
  const onCardLeave = jest.fn();
  const movieCard = shallow(
      <MovieCard
        film = {film}
        onFilmTitleClick={() => {}}
        onFilmCardClick={() => {}}
        onCardHover={() => {}}
        onCardLeave={onCardLeave}
      />
  );
  movieCard.simulate(`mouseleave`);
  expect(onCardLeave.mock.calls.length).toBe(0);
});
