import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

it(`rendering is ok`, () => {
  const tree = renderer
        .create(<Main
          name={`The Green Mile`}
          genre={`Drama`}
          date={1999}
          list={[`What We Do in the Shadows`, `Shutter Island`, `No Country for Old Men`]}
          onFilmTitleButtonClick={() => {}}
        />)
            .toJSON();

  expect(tree).toMatchSnapshot();
});
