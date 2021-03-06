import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>
          {/* A bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* A footer here eventually */}
      </div>
    );
  }
}

export default Palette;
