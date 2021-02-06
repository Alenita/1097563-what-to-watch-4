import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import FullMovieInfo from "../full-movie-info/full-movie-info.jsx";
import {Pages} from "../../helpers/constants.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {currentPage} = this.props;

    switch (currentPage) {
      case Pages.MAIN:
        return (
          <Main />
        );
      case Pages.MOVIE:
        return (
          <FullMovieInfo />
        );
      default:
        return (
          <Main />
        );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp() }
          </Route>
          <Route exact path="/dev-film">
            <FullMovieInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
});

export {App};
export default connect(mapStateToProps)(App);
