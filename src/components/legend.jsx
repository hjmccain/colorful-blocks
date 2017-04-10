import React, { Component } from 'react';
import './home.css';

class Legend extends Component {
  constructor() {
    super();
    this.state = {}
  }
  componentWillMount() {
    const { colorIds } = this.props;
    let colorIdKeys = Object.keys(colorIds);
    // activities have five-string key (e.g. 1.2.3)
    let activityKeys = colorIdKeys.filter(item => item.length === 5);
    // no non-activity has a five-string key
    let objKeys = colorIdKeys.filter(item => item.length !== 5);
    let activities = activityKeys.map(key => {
      return [key, colorIds[key]];
    });
    let objs = objKeys.map(key => {
      return [key, colorIds[key]];
    });
    this.setState({
      activities: activities,
      objs: objs
    })
  }

  render() {
    if (this.state.activities) {
      return (
        <div className="legend">
          <h3>Activity codes</h3>
          <div className="legendChild">
            {this.state.activities.map(activity => {
              return (
                <div key={activity[1]}>
                  <p>{activity[0]}</p>
                  <div style={{'backgroundColor': `hsl(${activity[1]}, 100%, 50%)`, 'width': '30px', 'height': '30px'}}></div>
                </div>
              )
            })}
          </div>
          <h3>Object-component codes</h3>
          <div className="legendChild">
            {this.state.objs.map(obj => {
              if (obj[0] !== 'undefined') {
                return (
                  <div key={obj[1]}>
                    <p>{obj[0]}</p>
                    <div style={{'backgroundColor': `hsl(${obj[1]}, 100%, 50%)`, 'width': '30px', 'height': '30px'}}></div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      );
    } else {
      return <div>boooo</div>
    }
  }
}

export default Legend;
