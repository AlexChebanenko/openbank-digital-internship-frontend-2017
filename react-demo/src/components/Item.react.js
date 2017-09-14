import React from 'react';
import Actions  from '../actions/Actions';

class Item extends React.Component {

  openRoomAction() {
    Actions.openRoom(this.props.itemData.roomName);
  }

  openDeviceAction() {
    Actions.openDevice(this.props.itemData.deviceId);
  }

  addDeviceToRoomAction() {
    this.props.buttonCallback(this.props.itemData.deviceId);
  }

  render() {
    let item;
    switch (this.props.itemType) {
      case 'room':
        let roomIcon = null;
        if(this.props.showIcon) {
          roomIcon = (
            <img
              src={this.props.itemData.roomIcon}
              alt={"Иконка для" + this.props.itemData.roomName}
            />
          )
        } else {
          roomIcon = "Вместо иконки";
        }
        item = (
          <div className="ListItem" onClick={this.openRoomAction.bind(this)}>
            {roomIcon}
            <p className="ItemTitle" >{this.props.itemData.roomName.toUpperCase()}</p>
          </div>
        );
        break;
      case 'device':
        item = (
          <div className="ListItem"
            onClick={this.props.buttonCallback === undefined ?
                     this.openDeviceAction.bind(this) : this.addDeviceToRoomAction.bind(this)}
          >
            <img
              src={`./icons/devices/${this.props.itemData.deviceType}.svg`}
              alt={this.props.itemData.deviceModelDescription}
            />
            <p className="ItemTitle" >{this.props.itemData.deviceName}</p>
          </div>
        );
        break;
      default:
        return 'MockItem';
    }
    return  item;
  }
}

export default Item;