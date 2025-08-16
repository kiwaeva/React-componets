import { useState } from "react";

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

const ColorPicker = ({}) => {
const [color, setColor]= useState('#000000');
const handleChange = (e) => {
  setColor(e.target.value);
};
    return(
        <div className="color-picker">
        <input type="color" value={color} onChange={handleChange}></input>
        <div className="color-info"> 
            <p>HEX: {color}</p>
            <p>RGB: {hexToRgb(color)} </p>
        </div>
        </div>
    )
}

export default ColorPicker;