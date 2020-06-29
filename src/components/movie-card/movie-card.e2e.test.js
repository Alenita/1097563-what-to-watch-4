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

it(`The card title is clicked, the function onCardClick is called`, () => {
  const onFilmTitleClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        onFilmTitleClick={onFilmTitleClick}
        onCardHover={() => {}}
        onCardLeave={() => {}}
      />
  );

  const title = movieCard.find(`.small-movie-card__title`);

  title.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(onFilmTitleClick.mock.calls.length).toBe(1);
});

it(`The card is hovered`, () => {
  const onCardHover = jest.fn();
  const onCardLeave = jest.fn();

  const {id} = film;
  const movieCard = shallow(
      <MovieCard
        film = {film}
        onFilmTitleClick={() => {}}
        onCardHover={() => onCardHover(id)}
        onCardLeave={onCardLeave}
      />
  );

  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toEqual(id);

  expect(onCardLeave.mock.calls.length).toBe(1);
});

/* it(`The card is left`, () => {
  const onCardLeave = jest.fn();
  const movieCard = shallow(
      <MovieCard
        film = {film}
        onFilmTitleClick={() => {}}
        onCardHover={() => {}}
        onCardLeave={onCardLeave}
      />
  );


});*/
