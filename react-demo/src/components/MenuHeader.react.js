import React from 'react';
import Button from "./Button.react";
import PropTypes from 'prop-types';
import Actions from "../actions/Actions";


class MenuHeader extends React.Component {

  pressHomeButton() {
    Actions.clickHomeButton();
  }

  render() {
    let leftPart = this.props.homeButtonEnabled ?
                   <div className="NavButton">
                     <Button pic={'./icons/less.svg'} desc={'НАЗАД'}
                             onClickAction={this.pressHomeButton.bind(this)}
                     />
                     <h2>{this.props.screenName}</h2>
                   </div> :
                   <h1> Привет, {this.props.masterName || 'Хозяин'}. </h1>;
    return (
      <header className="MenuHeader">
        {leftPart}
        <Button
          pic={'./icons/settings.svg'}
          desc={'НАСТРОЙКИ'}
        />
      </header>
    )
  }
}

MenuHeader.propTypes = {
  masterName: PropTypes.string,
  homeButtonEnabled: PropTypes.bool,
};

export default MenuHeader;