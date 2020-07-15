import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FullMovieInfo from "../full-movie-info/full-movie-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleFilmCardClick = this._handleFilmCardClick.bind(this);
    this._handleMainRender = this._handleMainRender.bind(this);
    this._handleMovieInfoRender = this._handleMovieInfoRender.bind(this);
  }

  _handleFilmCardClick(id) {
    this.setState({
      activeCard: id,
    });
  }

  _handleMainRender() {
    const {filmInfo, films} = this.props;
    return (
      <Main
        filmInfo={filmInfo}
        films={films}
        onFilmTitleClick={this._handleFilmCardClick}
        onFilmCardClick={this._handleFilmCardClick}
      />
    );
  }

  _handleMovieInfoRender() {
    const {filmInfo, films} = this.props;

    return (
      <FullMovieInfo
        filmInfo={filmInfo}
        films={films}
        onFilmCardClick={this._handleFilmCardClick}
        onFilmTitleClick={this._handleFilmCardClick}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._handleMainRender}
          </Route>
          <Route exact path="/dev-film">
            {this._handleMovieInfoRender}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    backgroundPoster: PropTypes.string.isRequired,
    filmPoster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(
          {poster: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired})
  ).isRequired,
};

export default App;
