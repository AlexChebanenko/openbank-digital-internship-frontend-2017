import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonType: this.props.buttonType,
    }
  }

  render() {
    switch (this.state.buttonType) {
      case 'settings':
        return (
          <div>

          </div>
        )
    }

  }
}

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
};

export default Button;