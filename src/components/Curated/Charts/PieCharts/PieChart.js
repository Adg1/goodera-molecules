import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';
import PropTypes from 'prop-types';

export default class PieChart extends Component {

  static propTypes = {
    /** Piechart data; Array of ```{x:xLabel, y:yval}``` values */
    data: PropTypes.array.isRequired,
    /** Pie styles */
    pieStyle: PropTypes.object,
  }
  static defaultProps = {
    pieStyle: {
      parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "60%" }
    }
  }

  render() {
    return (
      <VictoryPie style={this.props.pieStyle} data={this.props.data}/>
    );
  }
}