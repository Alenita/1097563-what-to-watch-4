import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 910,
  poster: `img/poster-1.jpg`,
  title: `The Lord of the Rings: The Return of the King`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
