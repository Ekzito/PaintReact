import React from 'react';
import ColorPickers from './ColorPickers'
import './Controls.css'

class Controls extends React.Component {

    state = {
        pickerOpen: false,
        sizeLineValue: 1
    }
    
    handleClickAddColor() {
        const pickerOpen = !this.state.pickerOpen;

        this.setState({pickerOpen})
    }

    handleClickClosePicker() {
        this.setState({pickerOpen: false});
    }

    handleClickClear() {
        this.props.canvasClear();
    }

    handleSizeChange(event) {
        const size = event.target.value;

        this.setState({sizeLineValue: size})

        this.props.lineSizeChange(size)
    }

    render() {
        return (
            <div className="controls">
                <div className='controls__flex-container'>
                    <button className='controls__button' onClick={() => this.handleClickAddColor()}>
                        Новый цвет
                    </button>
        
                    <button className='controls__button' onClick={() => this.handleClickClear()}>
                        Очистить холст
                    </button>
                    <label>
                        <p className='size-control-text'>Толщина кисти</p>
                        <input onChange={(event) => this.handleSizeChange(event)} type="range" id="brush-size-slider" min="1" max="10" value={this.state.sizeLineValue}/>
                    </label>
                </div>
                {this.state.pickerOpen ? <ColorPickers addColor={(red, green, blue) => this.props.addColor(red, green, blue)} closePicker={() => this.handleClickClosePicker()}></ColorPickers> : null}
            </div>
        );
    }
}

export default Controls;