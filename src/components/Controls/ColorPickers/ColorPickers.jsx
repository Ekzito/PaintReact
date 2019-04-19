import React from 'react';
import './ColorPickers.css'


class ColorPickers extends React.Component {
    state = {
        redValue: 0,
        greenValue: 0,
        blueValue: 0,
    };

    handleCloseButton = () => {
        this.props.closePicker();
    };

    handleAddColorButton = () => {
        this.props.addColor(Number(this.state.redValue), Number(this.state.greenValue), Number(this.state.blueValue));
    };

    handleValueChange = (event) => {
        let value = event.target.value;
        let color = `${event.target.id}Value`;
        this.setState({[color]:value});
    };

    render () {
        return (
			<div className="color-picker">
				<span style={{backgroundColor: `rgb(${this.state.redValue},${this.state.greenValue},${this.state.blueValue})`}} className="color-picker__preview"></span>
				<div className="color-picker__sliders">
					<label htmlFor='red'>R
						<input 
							style={{backgroundColor: `rgb(${this.state.redValue},0,0)`}} 
							onChange={this.handleValueChange} 
							type="range" 
							id="red" 
							className="color-picker__slider color-picker__slider--red" 
							name="red" 
							min="0" 
							max="255" 
							value={this.state.redValue}
						/>
					</label>
					<label htmlFor="green">G
						<input 
							style={{backgroundColor: `rgb(0,${this.state.greenValue},0)`}} 
							onChange={this.handleValueChange} 
							type="range" 
							id="green" 
							className="color-picker__slider color-picker__slider--green" 
							name="green" 
							min="0" 
							max="255" 
							value={this.state.greenValue}
						/>
					</label>
					<label htmlFor="blue">B
						<input 
							style={{backgroundColor: `rgb(0,0,${this.state.blueValue})`}} 
							onChange={this.handleValueChange} 
							type="range" id="blue" 
							className="color-picker__slider color-picker__slider--blue" 
							name="blue" 
							min="0" 
							max="255" 
							value={this.state.blueValue}
						/>
					</label>
				</div>
				<div className="color-picker__controls">
					<button onClick={this.handleAddColorButton} className="color-picker__button">
					Добавить
					</button>
					<button onClick={this.handleCloseButton} className="color-picker__button">
					Закрыть
					</button>
				</div>
			</div>
        );
    };
};

export default ColorPickers;