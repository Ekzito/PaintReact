import React from 'react';

import './ColorPalette.css'


class ColorPalette extends React.Component {

    handleColorSelected(event) {
        if (event.target.tagName === 'LI') {
            const selectedColor = event.target.style.backgroundColor;
            const colorsItems = document.querySelectorAll('.color-palette__color');
            colorsItems.forEach(colorItem => colorItem.classList.remove('selected'));
            event.target.classList.add('selected');

            this.props.selectColor(selectedColor);
        }
    }

    render() {
        const colors = this.props.colors;
        return (
            <ul onClick = {(event) => this.handleColorSelected(event)} className="color-palette">
                {colors.map((color, index) => 
                <li style={{backgroundColor: `rgb(${color.red},${color.green},${color.blue})`}} key={index} className='color-palette__color'>
                </li>
                 )} 
            </ul>
        );
    }
}

export default ColorPalette;