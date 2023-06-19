import React, { Component } from "react";

class Bar extends Component {
  state = {};
  render() {
    return (
      <svg
        className="bar"
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

export default Bar;
