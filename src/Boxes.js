import React, { Component } from 'react';
import './Boxes.css';
import Box from './Box';

class Boxes extends Component {
  state = {};
  static defaultProps = {
    boxCount: 18, // change the boxCount in App.js
  };

  render() {
    let i = 0;
    const boxes = Array.from({ length: this.props.boxCount }).map(() => {
      i = i + 1;
      return <Box key={i} />;
    });
    return <div className='Boxes'>{boxes}</div>;
  }
}

export default Boxes;
