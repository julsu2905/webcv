import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action active">
            Active item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Item
          </a>
          
        </div>
      </div>
    );
  }
}

export default SideBar;