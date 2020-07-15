import {filmRating, filmQuality} from "./constants.js";

export const determineFilmRating = (value) => {
  const {LOW_RATE, FINE_RATE, BETTER_RATE, HIGH_RATE} = filmRating;
  const {BAD, NORMAL, GOOD, VERYGOOD, AWESOME} = filmQuality;
  let rating;

  if (value < LOW_RATE) {
    rating = BAD;
  } else if (value >= LOW_RATE && value < FINE_RATE) {
    rating = NORMAL;
  } else if (value >= FINE_RATE && value < BETTER_RATE) {
    rating = GOOD;
  } else if (value >= BETTER_RATE && value < HIGH_RATE) {
    rating = VERYGOOD;
  } else if (value === HIGH_RATE) {
    rating = AWESOME;
  }
  return rating;
};

/*
export const formatNumber = (value) => {
  const formattedRating = value.toString().replace(/^\d+(\.\d{1})?$/);
  return formattedRating;
};*/
