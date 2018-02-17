/*eslint-disable no-magic-numbers*/
import React from "react";
import {
  VictoryAxis,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryScatter,
  VictoryStack,
  VictoryGroup,
  VictorySelectionContainer
} from "victory";
import PropTypes from 'prop-types';


/**
 * Barchart Component
 */
export default class BarChart extends React.Component {

  static propTypes = {
    /** Barchart data; Array of ```{x:xval, y:yval}``` values */
    data: PropTypes.array.isRequired,
    /** Bar styles */
    barStyle: PropTypes.object,
    /** Bar Line styles */
    lineStyle: PropTypes.object,
    /** Bar Line label */
    lineLabels: PropTypes.array,
    /** OnClick Variations */
    onClickVariations: PropTypes.object,
  }

  static defaultProps = {
    barStyle: { data: { width: 15, fill: "green" } },
    lineStyle: { data: { stroke: "blue", strokeWidth: 5 } },
    lineLabels: [],
    onClickVariations: {}
  }

  render() {
    const style = {
      parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "60%" }
    };
    return (
      <div className="demo">
        <VictoryChart style={style}
          domainPadding={{ x: 30, y: 30 }}
          height={600}
          width={600}
          events={[{
            childName: "bar",
            target: "data",
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: "labels",
                    mutation: () => {
                      return { text: this.props.onClickVariations.barLabel};
                    }
                  },
                  {
                    childName: "line",
                    eventKey: "all",
                    target: "data",
                    mutation: () => {
                      return { style: { stroke: "lime" } };
                    }
                  },
                  {
                    childName: "line",
                    eventKey: 0,
                    target: "labels",
                    mutation: () => {
                      return {
                        style: { fill: "green" },
                        text: this.props.onClickVariations.lineLabel
                      };
                    }
                  }
                ];
              }
            }
          }]}
        >
          <VictoryBar name="bar"
            style={this.props.barStyle}
            data={this.props.data}
          />
          <VictoryLine name="line"
            y={() => 0.5}
            style={this.props.lineStyle}
            labels={this.props.lineLabels}
          />
        </VictoryChart>
      </div>
    );
  }
}