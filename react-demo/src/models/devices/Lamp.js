import Device from './Device';
import DeviceTypes from './DeviceTypes';

const Lamp = function (deviceId, lampName, lampModelDescription) {

  const lampState = {
    ON: 'ON',
    OFF: 'OFF',
  };

  let brightness = 0;

  class Lamp extends Device {
    constructor(deviceId, lampName, lampModelDescription) {
      super(deviceId, lampName, lampModelDescription, DeviceTypes.LAMP);
      this.lampState = lampState.OFF;
    }

    get brightness() {
      return this.lampState === 'OFF' ? 0 : brightness;
    }

    set brightness(value) {
      if(value > 100) {
        brightness = 100;
      }
      else if(value <= 0) {
        this.lampState = lampState.OFF;
      }
      brightness = value;
    }

    switchState() {
      this.lampState = this.lampState === 'OFF' ? lampState.ON : lampState.OFF;
    }

    toString() {
      switch(this.lampState) {
        case lampState.OFF:
          return `Источник света '${this.deviceName}' выключен`;
        case lampState.ON:
          return `Источник света '${this.deviceName}' включён, яркость ${this.brightness}%`;
      }
    }
  }

  return new Lamp(deviceId, lampName, lampModelDescription);
};

export default Lamp;