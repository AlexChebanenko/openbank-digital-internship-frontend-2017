import React from 'react';
import Item from "./Item.react";
import Button from "./Button.react";
import PropTypes from 'prop-types';


class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: this.props.listName,
      listData: this.props.listData,
      dataType: this.props.listSettings.dataType,
      addButton: this.props.listSettings.addButton,
      moreButton: this.props.listSettings.moreButton,
      itemsShowedByDefault: this.props.listSettings.itemsShowedByDefault || 0,
      showIcons: this.props.listSettings.showIcons,
    }
  }

  render() {
    let showedListData = this.state.listData;
    if(!this.state.itemsShowedByDefault) {
      showedListData = showedListData.slice(0, this.state.itemsShowedByDefault);
    }
    let listItems = showedListData.map(
      (dataItem, id) => {
        return (
          <li key={id}>
            <Item
              itemType={this.state.dataType}
              itemData={dataItem}
              showIcon={this.state.showIcons}
            />
          </li>
        );
      }
    );

    if(this.state.moreButton) {
      listItems.push(
        <li key={listItems.length}>
          <Button
            buttonType="more"
            dataType={null}
          />
        </li>
      );
    }

    if(this.state.addButton) {
      listItems.push(
        <li key={listItems.length}>
          <Button
            buttonType="add"
            dataType={this.state.dataType}
          />
        </li>
      );
    }


    return (
      <div>
        <h2>
          {this.state.listName}:
        </h2>
        <hr/>
        <ul>
          {listItems}
        </ul>
      </div>

    );
  }
}

ItemList.propTypes = {
  listName: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired,
  dataType: PropTypes.string,
  addButton: PropTypes.bool,
  moreButton: PropTypes.bool,
  itemsShowedByDefault: PropTypes.number,
  showIcons: PropTypes.bool,
};

export default ItemList;