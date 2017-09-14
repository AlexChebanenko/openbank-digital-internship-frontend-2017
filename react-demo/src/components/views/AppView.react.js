import React from 'react';
import MenuHeader from '../MenuHeader.react';
import MainView from "./MainView.react";
import RoomView from "./RoomView.react";
import RoomAddView from "./RoomAddView";



class AppView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScreenType: 'main',
      prevScreenName: 'main',
    }
  }

  headerScreenName() {
    let additionalDescription = this.props.navigation.screenType === 'room_add_device' ?
                                ' > Добавить устройство' : '';
    return `${this.props.navigation.screenName}${additionalDescription}`;
  }

  render() {
    let homeButton = this.props.navigation.screenType !== 'main';
    return (
      <div className="AppView">
        <MenuHeader
          masterName={this.props.home.masterName}
          homeButtonEnabled={homeButton}
          screenName={this.headerScreenName()}
        />
        {
          this.props.navigation.screenType === 'main' &&
          <MainView
            rooms={this.props.home.rooms}
            devices={this.props.home.devices}
          />
        }
        {
          this.props.navigation.screenType === 'room' &&
          <RoomView
            roomName={this.props.navigation.screenName}
            devices={this.props.home.devices.
            filter(device => device.roomName === this.props.navigation.screenName)}
          />
        }
        {
          this.props.navigation.screenType === 'room_add_device' &&
          <RoomAddView
            roomName={this.props.navigation.screenName}
            devices={this.props.home.devices.
            filter(device => device.roomName === '_home')}
          />
        }
        <footer/>
      </div>
    )
  }

}

export default AppView;