import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";

const filmInfo = {
  name: `Uknown`,
  genre: `Horror`,
  date: 1900
};

const films = [
  {
    poster: `https://www.film.ru/sites/default/files/movies/posters/1610055-574057.jpg`,
    title: `Harry Potter - 1`,
  },
  {
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/6/60/Harry_Potter_and_the_Order_of_the_Phoenix_%E2%80%94_movie.jpg/216px-Harry_Potter_and_the_Order_of_the_Phoenix_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 2`,
  },
  {
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/4/45/Harry_Potter_and_the_Goblet_of_Fire_%E2%80%94_movie.jpg/212px-Harry_Potter_and_the_Goblet_of_Fire_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 3`,
  },
  {
    poster: `https://st.kp.yandex.net/images/film_iphone/iphone360_407636.jpg`,
    title: `Harry Potter - 4`,
  },
  {
    poster: `https://www.kino-teatr.ru/movie/posters/big/2/20032.jpg`,
    title: `Harry Potter - 5`,
  },
  {
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 6`,
  },
  {
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 6`,
  },
  {
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 6`,
  },
];

it(`rendering is ok`, () => {
  const tree = renderer
        .create(<App
          filmInfo={filmInfo}
          films={films}
        />)
            .toJSON();

  expect(tree).toMatchSnapshot();
});
