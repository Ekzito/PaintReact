import React from 'react';

import './ColorPalette.css'


class ColorPalette extends React.Component {

handleColorSelected = (event) => {
            const selectedColor = event.target.style.backgroundColor;
            this.props.selectColor(selectedColor, Number(event.target.id));
    };

    render() {
        const colors = this.props.colors;
        return (
            <ul className="color-palette">
                {colors.map((color, index) => 
                <li 
                  onClick = {this.handleColorSelected}
                  style={{backgroundColor: `rgb(${color.red},${color.green},${color.blue})`}} 
                  key={color.id} 
                  id={(color.id)}
                  className={this.props.selected === color.id ? 'color-palette__color selected':'color-palette__color'}
                />
                )} 
            </ul>
        );
    };
};

export default ColorPalette;