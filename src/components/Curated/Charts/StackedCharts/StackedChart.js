import React, { Component } from 'react';
import {
  VictoryAxis,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryScatter,
  VictoryPortal,
  VictoryStack,
  VictoryGroup,
  VictorySelectionContainer
} from "victory";

export default class StackedChart extends Component {
  render() {
    const style = {
      parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "60%" }
    };
    return (
      <VictoryChart style={style} scale={{ x: "time" }} >
        <VictoryStack colorScale="warm">
          <VictoryGroup
            data={[
              { x: new Date(1986, 1, 1), y: 2 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 5 },
              { x: new Date(2016, 1, 1), y: 4 }
            ]}
          >
            <VictoryArea />
            <VictoryPortal>
              <VictoryScatter
                style={{ data: { fill: "black" } }}
              />
            </VictoryPortal>
          </VictoryGroup>
          <VictoryGroup
            data={[
              { x: new Date(1986, 1, 1), y: 4 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 2 },
              { x: new Date(2016, 1, 1), y: 5 }
            ]}
          >
            <VictoryArea />
            <VictoryPortal>
              <VictoryScatter
                style={{ data: { fill: "black" } }}
              />
            </VictoryPortal>
          </VictoryGroup>
          <VictoryGroup
            data={[
              { x: new Date(1986, 1, 1), y: 3 },
              { x: new Date(1996, 1, 1), y: 1 },
              { x: new Date(2006, 1, 1), y: 4 },
              { x: new Date(2016, 1, 1), y: 2 }
            ]}
          >
            <VictoryArea />
            <VictoryPortal>
              <VictoryScatter
                style={{ data: { fill: "black" } }}
              />
            </VictoryPortal>
          </VictoryGroup>
        </VictoryStack>
      </VictoryChart>
    );
  }
}





