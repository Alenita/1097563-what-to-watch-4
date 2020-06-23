import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  poster: `img/poster-1.jpg`,
  title: `The Lord of the Rings: The Return of the King`,
};

it(`The card title is clicked, the function onCardClick is called`, () => {
  const onCardClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        onCardClick={onCardClick}
        onHover={() => {}}
      />
  );

  const title = movieCard.find(`.small-movie-card__title`);

  title.props().onClick();
  expect(onCardClick.mock.calls.length).toBe(1);
});

it(`The function onHover is called`, () => {
  const onHover = jest.fn();
  const movieCard = shallow(
      <MovieCard
        film = {film}
        onCardClick={() => {}}
        onHover={() => onHover(film)}
      />
  );

  movieCard.simulate(`mouseOver`);

  expect(onHover.mock.calls.length).toBe(1);
  expect(onHover.mock.calls[0][0]).toMatchObject(film);
});
