import React from 'react';
import Item from "./Item.react";
import Button from "./Button.react";
import PropTypes from 'prop-types';


class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsShowedByDefault: this.props.listSettings.itemsShowedByDefault,
      isExpanded: false,
    }
  }

  expandList() {
    this.setState({isExpanded: !this.state.isExpanded,});
  }

  showedListData() {
    if(!this.state.isExpanded) {
      if(this.state.itemsShowedByDefault) {
        return this.props.listData.slice(0, this.state.itemsShowedByDefault + 1);
      }
    }
    return this.props.listData;
  }

  render() {
    let listItems = null;
    if(this.props.listData) {
      listItems = this.showedListData().map(
        (dataItem, id) => {
          //need certain index in case of list of rooms because of
          // first room named '_home' is internal and should be hidden
          if(this.props.listSettings.dataType === 'room' && id === 0) {
            return null;
          }
          else {
            return (
              <Item
                key={id}
                itemType={this.props.listSettings.dataType}
                itemData={dataItem}
                showIcon={this.props.listSettings.showIcons}
                buttonCallback={this.props.listContext === 'room_add_device' ?
                                this.props.buttonCallback : undefined}
              />
            );
          }
        }
      );
    }

    return (
      <div style={{
        margin: 10 + 'px',
      }}>
        <h2>
          {this.props.listName}:
        </h2>
        <hr/>
        <div className="ItemList">
          {listItems}
          {
            this.props.listSettings.moreButton &&
            this.props.listData.length >= this.state.itemsShowedByDefault &&
            <Button
              pic={this.state.isExpanded ? './icons/less.svg' : './icons/more.svg'}
              desc={this.state.isExpanded ? 'МЕНЬШЕ' : 'БОЛЬШЕ'}
              onClickAction={this.expandList.bind(this)}
            />
          }
          {
            this.props.listSettings.addButton &&
            <Button
              pic={'./icons/add.svg'}
              desc={'ДОБАВИТЬ'}
              onClickAction={this.props.buttonCallback}
            />
          }
        </div>
      </div>

    );
  }
}

ItemList.propTypes = {
  listName: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired,
  buttonCallback: PropTypes.func,
  listContext: PropTypes.string.isRequired,
  listSettings: PropTypes.shape(
    {
      dataType: PropTypes.string,
      addButton: PropTypes.bool,
      moreButton: PropTypes.bool,
      itemsShowedByDefault: PropTypes.number,
      showIcons: PropTypes.bool,
    }
  ),
};

export default ItemList;