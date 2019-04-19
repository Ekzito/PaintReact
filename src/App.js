import React, { Component } from 'react';

import ColorPalette from './components/ColorPalette/';
import Controls from './components/Controls/';

import CanvasDraw from 'react-canvas-draw'
import './App.css';

class App extends Component {

  state = {
  colors: [
      { id:1, red: 0, green: 0, blue: 0 },
      { id:2, red: 255, green: 0, blue: 0 },
      { id:3, red: 0, green: 255, blue: 0 },
      { id:4, red: 0, green: 0, blue: 255 },
      { id:5, red: 255, green: 255, blue: 0 },
      { id:6, red: 0, green: 255, blue: 255 },
      { id:7, red: 255, green: 0, blue: 255 },
      { id:8, red: 100, green: 0, blue: 200 },
      { id:9, red: 200, green: 0, blue: 130 },
      { id:10, red: 12, green: 67, blue: 86 },
      { id:11, red: 93, green: 10, blue: 0 },
      { id:12, red: 199, green: 100, blue: 0 },
      { id:13, red: 0, green: 50, blue: 40 },
      { id:14, red: 63, green: 150, blue: 255 },
      { id:15, red: 255, green: 255, blue: 255 },
  ],
  selectedColor: 'rgb(0, 0, 0)',
  lineWidth: 1,
  paletteColor: 0,
  };

  addColor = (red, green, blue) => {
    const colors = [...this.state.colors, { id:this.state.colors.length+1, red, green, blue }];
    this.setState({colors});
  };

  selectColor = (color, paletteColor) => {
    const selectedColor = color;
    this.setState({selectedColor, paletteColor});
  };

  lineSizeChange = (size) => {
    const lineWidth = Number(size);
    this.setState({lineWidth});
  };

  canvasClear = () => {
    this.saveableCanvas.clear();
  };

  render() {
    return (
      <div className="App">
          <div className='canvas'>
            <CanvasDraw 
              canvasWidth={708} 
              canvasHeight={500} 
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)} 
              brushRadius={this.state.lineWidth} 
              brushColor={this.state.selectedColor}
            />
          </div>
          <ColorPalette 
            selectColor={this.selectColor} 
            colors={this.state.colors} 
            id="color-palette"
            selected={this.state.paletteColor}
          />
          <Controls 
            canvasClear={this.canvasClear} 
            lineSizeChange={this.lineSizeChange} 
            addColor={this.addColor}
          />
      </div>
    );
  };
};

export default App;
