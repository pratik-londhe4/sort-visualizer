import './App.css';
import Graph from './components/graph';
import React, { Component } from 'react';


class App extends Component {
  state = {  } 
  render() { 
    return (
     <div>
      <h2>Sorting Visualizer</h2>
      <button onClick={this.bubbleSort}>Bubble Sort</button>
      <button onClick={this.insertionSort}>Insertion Sort</button>
      <button onClick={this.reset}>Reset</button>
      <div>
        <Graph></Graph>
      </div>
    </div>
    
   );
  }
}
 
export default App;

