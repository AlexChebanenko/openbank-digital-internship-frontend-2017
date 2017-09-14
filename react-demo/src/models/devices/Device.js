import DeviceTypes from './DeviceTypes';
import PropTypes from 'prop-types';


class Device {
  constructor(deviceId, deviceName, deviceModelDescription, deviceType) {
    this.deviceId = deviceId;
    this.deviceName = deviceName;
    this.deviceModelDescription = deviceModelDescription;
    this.deviceType = deviceType;
    this.roomName = '_home';
  }

  editName(newName) {
    this.deviceName = newName;
  }

  addToRoom(roomName) {
    if(roomName instanceof String) {
      this.roomName = roomName;
    }
    else {
      console.log('Нет такой комнаты');
    }
  }

  deleteFromRoom() {
    if(this.roomName !== '_home') {
      this.roomName = '_home';
    }
  }

}


export default Device;