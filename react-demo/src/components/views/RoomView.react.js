import React from 'react';
import ItemList from "../ItemList.react";
import Actions from "../../actions/Actions";


class RoomView extends React.Component {
  constructor(props) {
    super(props);
  }

  openAddDeviceScreenAction() {
    Actions.openAddDeviceScreen(this.props.roomName);
  }

  render() {
    return (
      <div className="RoomView">
        <ItemList
          listName="Сценарии"
          //listData={this.props.scenarios}
          listSettings={
            {
              dataType: 'scenario',
              addButton: true,
              moreButton: false,
              showIcons: true,
            }
          }
          listContext={'room'}
        />
        <ItemList
          listName="Устройства"
          listData={this.props.devices}
          listSettings={
            {
              dataType: 'device',
              addButton: true,
              moreButton: false,
              showIcons: true,
            }
          }
          listContext={'room'}
          buttonCallback={this.openAddDeviceScreenAction.bind(this)}
        />
      </div>
    )
  }
}

export default RoomView;