import {extend} from "./utils.js";
import {ALL_GENRES} from "./constants.js";
import films from "./mocks/films.js";
import filmInfo from "./mocks/film-info.js";

const initialState = {
  films,
  filmInfo,
  currentGenre: ALL_GENRES,
  filteredList: films
};

const ActionType = {
  FILTER_FILMS: `FILTER_FILMS`,
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`
};

export const filterByGenre = (genre) => {
  if (genre !== ALL_GENRES) {
    return films.filter((film) => film.genre === genre);
  } else {
    return films;
  }
};

const ActionCreator = {
  filterFilms: (currentGenre) => {
    const filteredList = filterByGenre(currentGenre);
    return {
      type: ActionType.FILTER_FILMS,
      payload: filteredList,
    };
  },

  getCurrentGenre: (currentGenre) => {
    return {
      type: ActionType.GET_CURRENT_GENRE,
      payload: currentGenre,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_FILMS:
      return extend(state, {
        filteredList: action.payload
      });
    case ActionType.GET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
