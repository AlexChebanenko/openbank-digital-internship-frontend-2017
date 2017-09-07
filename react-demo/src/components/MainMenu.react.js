import React from 'react';
import ItemList from "./ItemList.react";


class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterName: props.masterName,
    }
  }

  render() {
    return (
      <div>
        <MenuHeader
          masterName={this.state.masterName}
          homeButtonEnabled={false}
        />
        <ItemList
          listName="Избранные сценарии"
          //listData={this.props.scenarios}
          listSettings={
            {
              dataType: 'scenario',
              addButton: true,
              moreButton: false,
              showIcons: true,
            }
          }
        />
        <ItemList
          listName="Комнаты"
          listData={this.props.rooms}
          listSettings={
            {
              dataType: 'room',
              addButton: true,
              moreButton: false,
              showIcons: true,
            }
          }
        />
        <ItemList
          listName="Устройства"
          listData={this.props.devices}
          listSettings={
            {
              dataType: 'device',
              addButton: true,
              moreButton: true,
              showIcons: true,
              itemsShowedByDefault: 5,
            }
          }
        />
      </div>
    )
  }

}

export default MainMenu;