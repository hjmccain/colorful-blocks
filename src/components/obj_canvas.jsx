import React, { Component } from 'react';
import { data, colorIds } from './data';
import Legend from './legend';
import './home.css';

class ObjCanvas extends Component {
  componentDidMount() {
    const canvas = document.getElementById('tutorial');
    const ctx = canvas.getContext('2d');
    let x = 10;
    let y = 350;

    const buildContainer = (count, hue) => {
      let length = (count + 1) * 50;
      ctx.lineWidth = 10;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.strokeRect((x + 50) - length, y - 100, length, 150);
    }

    const buildSquares = (data) => {
      let newBlock;
      let white = `hsl(0, 0%, 100%)`;
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000000';

      ctx.fillStyle = data[0] ?  `hsl(${data[0]}, 100%, 50%)` : white;
      ctx.fillRect(x, y, 50, 50);
      if (data[3].activity) { ctx.strokeRect(x, y, 50, 50) };

      ctx.fillStyle = data[1] ? `hsl(${data[1]}, 100%, 50%)` : white;
      ctx.fillRect(x, y - 50, 50, 50);
      if (data[3].activity) { ctx.strokeRect(x, y - 50, 50, 50) };

      ctx.fillStyle = data[2] ? `hsl(${data[2]}, 100%, 50%)` : white;
      ctx.fillRect(x, y - 100, 50, 50);
      if (data[3].activity) { ctx.strokeRect(x, y - 100, 50, 50) };
    }

    if (canvas.getContext) {
      let current, i;
      let currentCount = 0;

      for (i = 0; i < data.length; i++) {
        let colors = [colorIds[data[i].obj1], colorIds[data[i].obj2], colorIds[data[i].obj3], data[i]];
        if (data[i].activity !== current) {
          if (current !== undefined) {
            buildContainer(currentCount, colorIds[data[i - 1].activity]);
          }
          current = data[i].activity;
          currentCount = 0;
          x += 100;
          buildSquares(colors);
        } else {
          currentCount++;
          x += 50;
          buildSquares(colors);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <canvas id="tutorial" width="3500" height="500"></canvas>
        <Legend colorIds={colorIds} />
      </div>
    );
  }
}

export default ObjCanvas;
