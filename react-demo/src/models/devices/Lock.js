import Device from './Device';
import DeviceTypes from './DeviceTypes';

const lockState = {
  OPENED:'OPENED',
  CLOSED: 'CLOSED',
};

class Lock extends Device {
  constructor(deviceId, lockName, lockModelDescription) {
    super(deviceId, lockName, lockModelDescription, DeviceTypes.LOCK);
    this.lockState = lockState.OPENED;
  }

  switchState() {
    this.lockState = this.lockState === 'OPENED' ? lockState.CLOSED : lockState.OPENED;
  }

  toString() {
    switch (this.lockState) {
      case lockState.OPENED:
        return `Замок '${this.deviceName}' открыт`;
      case lockState.CLOSED:
        return `Замок '${this.deviceName}' закрыт`;
    }
  }
}

export default Lock;