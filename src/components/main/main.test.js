import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

const films = [
  {
    id: 10,
    poster: `https://www.film.ru/sites/default/files/movies/posters/1610055-574057.jpg`,
    title: `Harry Potter - 1`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 9,
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/6/60/Harry_Potter_and_the_Order_of_the_Phoenix_%E2%80%94_movie.jpg/216px-Harry_Potter_and_the_Order_of_the_Phoenix_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 2`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 8,
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/4/45/Harry_Potter_and_the_Goblet_of_Fire_%E2%80%94_movie.jpg/212px-Harry_Potter_and_the_Goblet_of_Fire_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 3`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 7,
    poster: `https://st.kp.yandex.net/images/film_iphone/iphone360_407636.jpg`,
    title: `Harry Potter - 4`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 6,
    poster: `https://www.kino-teatr.ru/movie/posters/big/2/20032.jpg`,
    title: `Harry Potter - 5`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 5,
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 6`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 4,
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 6`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 3,
    poster: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg`,
    title: `Harry Potter - 6`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

const filmInfo = {
  name: `Interstellar`,
  genre: `Horror`,
  date: 2014
};

it(`rendering is ok`, () => {
  const tree = renderer
        .create(<Main
          filmInfo={filmInfo}
          films={films}
          onFilmTitleClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
