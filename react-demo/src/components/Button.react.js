import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <div
        className="ListItem"
        onClick={this.props.onClickAction}
      >
        <img src={this.props.pic} />
        <p className="ItemTitle" >{this.props.desc}</p>
      </div>
    );
  }
}

Button.propTypes = {
  pic: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onClickAction: PropTypes.func,
};

export default Button;