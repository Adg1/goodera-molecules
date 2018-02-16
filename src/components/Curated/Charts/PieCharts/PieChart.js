import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';

export default class PieChart extends Component {
  render() {
    const style = {
      parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "60%" }
    };
    return (
      <VictoryPie style={style}/>
    );
  }
}