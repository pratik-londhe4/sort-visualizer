import React, { Component } from "react";
import Bar from "./bar";

class Graph extends Component {
  state = {
    arr: Array(Math.round(window.innerWidth / 6))
      .fill()
      .map(() => Math.round(Math.random() * Math.round(window.innerWidth / 6)))
  };

  bubbleSort = () => {
    const arr = this.state.arr;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setInterval(() => {
          if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j+1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            this.setState(arr);
          }
        }, 1);
      }
    }
  };

  insertionSort = () => {
    let i, key, j;
    let arr = this.state.arr;
    const n = arr.length;

    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;

        this.setState(arr);
      }
      arr[j + 1] = key;
      this.setState(arr);
    }
  };

  reset = () => {
    let arr = Array(Math.round(window.innerWidth / 6))
      .fill()
      .map(() => Math.round(Math.random() * Math.round(window.innerWidth / 6)));
    this.setState({ arr });
  };

  render() {
    return (
      <div className="graph">
        {this.state.arr.map(i => <Bar height={i} width={3.9} />)}
      </div>
    );
  }
}

export default Graph;
