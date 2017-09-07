import React from 'react';
import Actions  from '../actions/Actions';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: this.props.itemType,
      itemData: this.props.itemData,
      showIcon: this.props.showIcon,
    }
  }

  openRoomAction() {
    Actions.openRoom(this.state.itemData.roomName);
  }

  openDeviceAction() {
    Actions.openDevice(this.state.itemData.deviceId);
  }

  render() {
    let item;
    switch (this.state.itemType) {
      case 'room':
        let roomIcon;
        if(this.state.showIcon) {
          roomIcon = (
            <img
              src={this.state.itemData.roomIcon}
              alt={"Иконка для" + this.state.itemData.roomName}
            />
          )
        } else {
          roomIcon = "Вместо иконки";
        }
        item = (
          <div onClick={this.openRoomAction.bind(this)}>
            {roomIcon}
            {this.state.itemData.roomName}
          </div>
        );
        break;
      case 'device':
        item = (
          <div onClick={this.openDeviceAction.bind(this)}>
            <img
              src={this.state.itemData.deviceType}
              alt={this.state.itemData.deviceModelDescription}
            />
            {this.state.itemData.deviceName}
          </div>
        );
        break;

    }
  }
}

export default Item;