import React from 'react';
import ItemList from "../ItemList.react";

class MainView extends React.Component {
  render() {
    return (
      <div className="MainView">
        {/*<ItemList*/}
          {/*listName="Избранные сценарии"*/}
          {/*//listData={this.props.scenarios}*/}
          {/*listSettings={*/}
            {/*{*/}
              {/*dataType: 'scenario',*/}
              {/*addButton: true,*/}
              {/*moreButton: false,*/}
              {/*showIcons: true,*/}
            {/*}*/}
          {/*}*/}
          {/*listContext={'main'}*/}

        {/*/>*/}
        <ItemList
          listName="Комнаты"
          listData={this.props.rooms}
          listSettings={
            {
              dataType: 'room',
              addButton: true,
              moreButton: true,
              showIcons: true,
              itemsShowedByDefault: 4,
            }
          }
          listContext={'main'}
        />
        <ItemList
          listName="Все устройства"
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
          listContext={'main'}
        />
      </div>
    );
  }
}

export default MainView;