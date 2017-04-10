import React, { Component } from 'react';
import { data, colorIds } from './data';
import './home.css';

class ObjCanvas extends Component {

  componentDidMount() {
    console.log('mounted')
    const canvas = document.getElementById('tutorial');
    const ctx = canvas.getContext('2d');
    let x = 10;
    let y = 350;

    function buildSquares(data) {
      let white = `hsl(0, 0%, 100%)`;
      ctx.fillStyle = data[0] ?  `hsl(${data[0]}, 100%, 50%)` : white;
      ctx.fillRect(x, y, 50, 50);
      ctx.fillStyle = data[1] ? `hsl(${data[1]}, 100%, 50%)` : white;
      ctx.fillRect(x, y - 50, 50, 50);
      ctx.fillStyle = data[2] ? `hsl(${data[2]}, 100%, 50%)` : white;
      ctx.fillRect(x, y - 100, 50, 50);
    }

    if (canvas.getContext) {
      let current, i;

      for (i = 0; i < data.length; i++) {
        let colors = [];
        colors.push(colorIds[data[i].obj1]);
        colors.push(colorIds[data[i].obj2]);
        colors.push(colorIds[data[i].obj3]);

        if (data[i].activity !== current) {
          current = data[i].activity;
          x += 100;
          buildSquares(colors);
        } else {
          x += 50;
          buildSquares(colors);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <canvas id="tutorial" width="1000" height="500"></canvas>
      </div>
    );
  }
}

export default ObjCanvas;
