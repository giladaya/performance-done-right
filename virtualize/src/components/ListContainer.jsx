import React from "react";
import List from "./List";
import ListV from "./ListV";

const INITIAL_ITEMS = 10;

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...Array(INITIAL_ITEMS).keys()],
      starsCount: 1,
      isVirtualized: false,
      isListOpen: true,
    };
  }

  addItems = count => {
    console.log("-- Add items clicked --");
    const min = this.state.list.length;
    const newItems = [...Array(count).keys()].map(x => x + min);
    this.setState((state, props) => ({
      list: this.state.list.concat(newItems)
    }));
  };

  clearList = () => {
    this.setState((state, props) => ({
      list: [],
      starsCount: 1
    }));
  };

  countInc = delta => {
    console.log("-- Counter inc clicked --");
    this.setState((state, props) => ({
      starsCount: this.state.starsCount + delta
    }));
  };

  toggleVirtualized = () => {
    this.setState((state, props) => ({
      isVirtualized: !this.state.isVirtualized
    }));
  };

  toggleListOpen = () => {
    this.setState((state, props) => ({
      isListOpen: !this.state.isListOpen
    }));
  };

  renderList = () => {
    return this.state.isVirtualized ? (
      <ListV
        data={this.state.list}
        starsCount={this.state.starsCount}
        color={this.state.color}
      />
    ) : (
      <List
        data={this.state.list}
        starsCount={this.state.starsCount}
        color={this.state.color}
      />
    );
  };

  render() {
    return (
      <div style={{ border: "1px solid silver", padding: "0.5em" }}>
        <h2>ListContainer</h2>
        <div style={{ border: "1px solid silver", padding: "0.5em", marginBottom: "0.5em" }}>
          <h3>Controls</h3>
          <button onClick={() => this.addItems(1)}>Add 1</button>
          <button onClick={() => this.addItems(100)}>Add 100</button>
          <button onClick={() => this.addItems(1000)}>Add 1000</button>
          <button onClick={() => this.clearList()}>Clear</button>
          <button onClick={() => this.countInc(1)}>Add *</button>
          <span> Total items: {this.state.list.length} </span>
          <br />
          <input
            type="checkbox"
            checked={this.state.isListOpen}
            onChange={this.toggleListOpen}
          />{" "}
          Show List
          <br />
          <input
            type="checkbox"
            checked={this.state.isVirtualized}
            onChange={this.toggleVirtualized}
          />{" "}
          Use Magic
        </div>
        {this.state.isListOpen && this.renderList()}
      </div>
    );
  }
}

export default ListContainer;
