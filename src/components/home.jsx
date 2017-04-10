import React, { Component } from 'react';
import ObjCanvas from './obj_canvas';
import './home.css';

class Home extends Component {
  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <div>
        <ObjCanvas />
      </div>
    );
  }
}

export default Home;
