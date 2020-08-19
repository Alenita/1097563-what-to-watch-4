import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: null,
      };
      this._handleItemClick = this._handleItemClick.bind(this);
    }

    _handleItemClick(item) {
      this.setState({
        activeItemId: item,
      });
    }

    render() {
      const {activeItemId} = this.state;

      return (<Component
        {...this.props}
        onItemClick={this._handleItemClick}
        activeItemId={activeItemId}
      />
      );
    }
  }
  return WithActiveItem;
};

export default withActiveItem;
