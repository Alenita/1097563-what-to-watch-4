import React from "react";
import GenresList from "./genres-list.jsx";
import renderer from "react-test-renderer";

const GENRES = [
  `All genres`,
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

it(`rendering is ok`, () => {
  const tree = renderer
        .create(
            <GenresList
              currentGenre={`All genres`}
              genres={GENRES}
              onGenreClick={()=>{}}
            />,
            {
              createNodeMock: () => {
                return {};
              }
            }
        ).toJSON();

  expect(tree).toMatchSnapshot();
});
