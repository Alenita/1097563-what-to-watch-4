import {reducer, ActionType, filterByGenre, initialState} from "./reducer.js";
import films from "../mocks/films.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator.filterFilms return all list of films when All Genres is active`, () => {
    expect(reducer({
      currentGenre: `All Genres`,
      filteredList: films,
    }, {
      type: ActionType.FILTER_FILMS,
      payload: filterByGenre(`All genres`),
    })).toEqual({
      currentGenre: `All Genres`,
      filteredList: films,
    });
  });
});
