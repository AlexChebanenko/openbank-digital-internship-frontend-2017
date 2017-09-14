import Device from './devices/Device';
import DeviceTypes from './devices/DeviceTypes';
import Lamp from "./devices/Lamp";
import Lock from "./devices/Lock";
import Socket from "./devices/Socket";

class Home {
  constructor(homeState = {}) {
    this.masterName = homeState.masterName || '';
    this.rooms = homeState.rooms || [
      {
        roomName: '_home',
        roomIcon: 'home_icon.svg',
      }
      ];
    this.devices = homeState.devices || [];
    this.totalDeviceIds = homeState.totalDeviceIds || 0;
  }

  addNewRoom(roomName, roomIcon) {
    this.rooms.push({roomName, roomIcon,});
  }

  editRoomIcon(roomName, newRoomIcon) {
    for(let room of this.rooms) {
      if(room.roomName === roomName) {
        room.roomIcon = newRoomIcon;
      }
    }
  }

  editRoomName(currentRoomName, newRoomName) {
    this.devices
        .filter(device => device.roomName === currentRoomName)
        .forEach(device => device.addToRoom(newRoomName));

    for(let room of this.rooms) {
      if(room.roomName === newRoomName) {
        room.roomName = newRoomName;
      }
    }
  }

  deleteRoom(roomName) {
    this.devices
        .filter(device => device.roomName === roomName)
        .forEach(device => device.deleteFromRoom());

    this.rooms.splice(this.rooms.indexOf(roomName), 1);
  }

  addNewDevice(deviceName, deviceModelDescription, deviceType) {
    let newDevice;
    switch (deviceType) {
      case DeviceTypes.LAMP:
        newDevice = new Lamp(this.totalDeviceIds, deviceName, deviceModelDescription);
        break;
      case DeviceTypes.LOCK:
        newDevice = new Lock(this.totalDeviceIds, deviceName, deviceModelDescription);
        break;
      case DeviceTypes.SOCKET:
        newDevice = new Socket(this.totalDeviceIds, deviceName,deviceModelDescription);
        break;

      default:
        newDevice = new Device(this.totalDeviceIds, deviceName, deviceModelDescription);
    }

    this.devices.push(newDevice);
    this.totalDeviceIds++;
  }

  addDeviceToRoom(deviceId, roomName) {
    //looks like pretty ugly because of numerous tries of understand what goes wrong,
    //should be rewrote
    for (let i = 0; i < this.devices.length; i++) {
      if(this.devices[i].deviceId === deviceId) {
        this.devices[i].roomName = roomName;
      }
    }
  }

  deleteDevice(deviceId) {
    delete this.devices.filter(device => device.deviceId === deviceId);
  }
}


export default Home;