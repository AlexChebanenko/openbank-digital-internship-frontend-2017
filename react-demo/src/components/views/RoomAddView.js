import React from 'react';
import Actions from "../../actions/Actions";
import ItemList from "../ItemList.react";

class RoomAddView extends React.Component {
  constructor(props) {
    super(props);
  }

  addDeviceToRoomAction(deviceId) {
    Actions.addDeviceToRoom(this.props.roomName, deviceId);
    Actions.clickHomeButton();
    //modal window of result should be there in further
  }

  render() {
    return (
      <div className="RoomAddView">
        {
          this.props.devices.length > 0 ?
          <ItemList
            listName="Выберите непривязанное устройство"
            listData={this.props.devices}
            listSettings={
              {
                dataType: 'device',
                addButton: false,
                moreButton: false,
                showIcons: true,
              }
            }
            listContext={'room_add_device'}
            buttonCallback={this.addDeviceToRoomAction.bind(this)}
          /> :
          <h1>Непривязанных устройств нет</h1>
        }

      </div>
    );
  }
}

export default RoomAddView;