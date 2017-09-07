import React from 'react';
import Button from "./Button.react";
import PropTypes from 'prop-types';


class MenuHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterName: this.props.masterName,
      homeButtonEnabled: this.props.homeButtonEnabled,
    }
  }

  render() {
    return (
      <div>
        {this.state.homeButtonEnabled ?
          <Button
            buttonType="home"
          />
          :
          <h1>
            Привет, {this.state.masterName}.
         </h1>
        }
        <Button
          buttonType="settings"
        />
      </div>
    )
  }
}

MenuHeader.propTypes = {
  masterName: PropTypes.string,
  homeButtonEnabled: PropTypes.bool,
};

export default MenuHeader;