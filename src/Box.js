import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColor: this.clickHandler(),
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    let rgb = [];
    for (var i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 255));
    let rgbStr = 'rgb(' + rgb.join(',') + ')';
    this.setState({
      boxColor: rgbStr,
    });
    return rgbStr;
  }
  render() {
    return (
      <div className='Box'>
        <div onClick={this.clickHandler} className='Box-btn'>
          <div
            className='Box-btn-div'
            style={{ backgroundColor: this.state.boxColor }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Box;
