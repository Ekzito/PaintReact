import React, { Component } from 'react';

import ColorPalette from './components/ColorPalette';
import Controls from './components/Controls';

import CanvasDraw from 'react-canvas-draw'
import './App.css';

class App extends Component {

  state = {
  colors: [
      {red: 0, green: 0, blue: 0},
      {red: 255, green: 0, blue: 0},
      {red: 0, green: 255, blue: 0},
      {red: 0, green: 0, blue: 255},
      {red: 255, green: 255, blue: 0},
      {red: 0, green: 255, blue: 255},
      {red: 255, green: 0, blue: 255},
      {red: 100, green: 0, blue: 200},
      {red: 200, green: 0, blue: 130},
      {red: 12, green: 67, blue: 86},
      {red: 93, green: 10, blue: 0},
      {red: 199, green: 100, blue: 0},
      {red: 0, green: 50, blue: 40},
      {red: 63, green: 150, blue: 255},
      {red: 255, green: 255, blue: 255},
  ],
  selectedColor: 'rgb(0, 0, 0)',
  lineWidth: 1
  }

  addColor(red, green, blue) {
    const colors = [...this.state.colors, {red, green, blue}];
    this.setState({colors});
  }

  selectColor(color) {
    const selectedColor = color;
    this.setState({selectedColor});
  }

  lineSizeChange(size) {
    const lineWidth = size;
    this.setState({lineWidth});
  }

  canvasClear() {
    this.saveableCanvas.clear();
  }

  render() {
    return (
      <div className="App">
          <div className='canvas'>
            <CanvasDraw canvasWidth={708} canvasHeight={500} ref={canvasDraw => (this.saveableCanvas = canvasDraw)} brushRadius={this.state.lineWidth} brushColor={this.state.selectedColor}/>
          </div>
          <ColorPalette selectColor={(color) => this.selectColor(color)} colors={this.state.colors} id="color-palette"></ColorPalette>
          <Controls canvasClear={() => this.canvasClear()} lineSizeChange={(size => this.lineSizeChange(size))} addColor={(red, green, blue) => this.addColor(red, green, blue)}></Controls>
      </div>
    );
  }
}

export default App;
