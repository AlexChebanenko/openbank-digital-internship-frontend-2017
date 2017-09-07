import Device from './Device';
import DeviceTypes from './DeviceTypes';

const socketState = {
  ON: 'ON',
  OFF: 'OFF',
};

class Socket extends Device {
  constructor(deviceId, socketName, socketModelDescription) {
    super(deviceId, socketName, socketModelDescription, DeviceTypes.SOCKET);
    this.socketState = socketState.OFF;
  }

  switchState() {
    this.socketState = this.socketState === 'OFF' ? socketState.ON : socketState.OFF;
  }

  toString() {
    switch(this.socketState) {
      case socketState.OFF:
        return `Розетка '${this.deviceName}' выключена`;
      case socketState.ON:
        return `Розетка '${this.deviceName}' включена`;
    }
  }
}

export default Socket;