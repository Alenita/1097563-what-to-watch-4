import {extend} from "../helpers/utils.js";
import {ALL_GENRES} from "../helpers/constants.js";
import films from "../mocks/films.js";
import filmInfo from "../mocks/film-info.js";
import {Pages} from "../helpers/constants.js";

const initialState = {
  films,
  filmInfo,
  currentGenre: ALL_GENRES,
  currentFilm: filmInfo,
  currentPage: Pages.MAIN,
};

const ActionType = {
  SET_FILM_PAGE: `SET_FILM_PAGE`,
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`
};

const ActionCreator = {
  setFilmPage: (chosenFilm) => {
    return {
      type: ActionType.SET_FILM_PAGE,
      payload: chosenFilm,
    };
  },

  setCurrentGenre: (currentGenre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: currentGenre,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM_PAGE:
      return extend(state, {
        currentFilm: action.payload,
        currentPage: Pages.MOVIE
      });
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });
  }
  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
