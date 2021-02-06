import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.defaultActiveItem,
      };
      this._handleItemClick = this._handleItemClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          activeItem: this.props.defaultActiveItem,
        });
      }
    }

    _handleItemClick(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onItemClick={this._handleItemClick}
          activeItem={this.state.activeItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    defaultActiveItem: PropTypes.string.isRequired,
  };
  return WithActiveItem;
};

export default withActiveItem;
