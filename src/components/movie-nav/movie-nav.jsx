import React from 'react';
import PropTypes from 'prop-types';


const MovieNav = (props) => {
  const {activeItem, tabsItems, onItemCLick} = props;
  const tabs = Object.values(tabsItems);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, i) => {
          return (
            <li
              key={tab + i}
              className={`movie-nav__item ${tab === activeItem ? `movie-nav__item--active` : ``}`}
            >
              <a href="#"
                className="movie-nav__link"
                onClick={((evt) => {
                  evt.preventDefault();
                  onItemCLick(tab);
                })}>{tab}</a>
            </li>);
        })}
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  onItemCLick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  tabsItems: PropTypes.shape({
    OVERVIEW: PropTypes.string.isRequired,
    DETAILS: PropTypes.string.isRequired,
    REVIEWS: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieNav;
