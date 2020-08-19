import React, {PureComponent} from "react";

const withHover = (Component) => {
  class WithHover extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    _handleMouseLeave() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onCardMouseEnter={this._handleMouseEnter}
          onCardMouseLeave={this._handleMouseLeave}
        />
      );
    }
  }
  return WithHover;
};

export default withHover;
