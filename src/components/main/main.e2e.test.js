import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component works properly`, () => {
  it(`FilmTitleButton is pressed`, () => {
    const onFilmTitleButtonClick = jest.fn();

    const main = shallow(
        <Main
          name={`The Green Mile`}
          genre={`Drama`}
          date={1999}
          list={[`What We Do in the Shadows`, `Shutter Island`, `No Country for Old Men`]}
          onFilmTitleButtonClick={onFilmTitleButtonClick}
        />
    );

    const filmTitleButton = main.find(`.small-movie-card__link`).first();
    filmTitleButton.props().onClick();

    expect(onFilmTitleButtonClick.mock.calls.length).toBe(1);
  });
});

