import React from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const {onTabCLick, currentTab, tabsItems} = props;
  const tabs = Object.values(tabsItems);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, i) => {
          return (
            <li
              key={tab + i}
              className={`movie-nav__item ${tab === currentTab ? `movie-nav__item--active` : ``}`}
            >
              <a href="#"
                className="movie-nav__link"
                onClick={((evt) => {
                  evt.preventDefault();
                  onTabCLick(tab);
                })}>{tab}</a>
            </li>);
        })}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  onTabCLick: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  tabsItems: PropTypes.shape({
    OVERVIEW: PropTypes.string.isRequired,
    DETAILS: PropTypes.string.isRequired,
    REVIEWS: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabs;
