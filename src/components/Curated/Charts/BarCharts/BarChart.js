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

export default class BarChart extends React.Component {
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
                      return { text: "text" };
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
                        text: "waddup"
                      };
                    }
                  }
                ];
              }
            }
          }]}
        >
          <VictoryBar name="bar"
            style={{ data: { width: 15, fill: "green" } }}
            data={[
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 3 },
              { x: 4, y: 2 },
              { x: 5, y: 1 },
              { x: 6, y: 2 },
              { x: 7, y: 3 },
              { x: 8, y: 2 },
              { x: 9, y: 1 },
              { x: 10, y: 2 },
              { x: 11, y: 3 },
              { x: 12, y: 2 },
              { x: 13, y: 1 }
            ]}
          />
          <VictoryLine name="line"
            y={() => 0.5}
            style={{ data: { stroke: "blue", strokeWidth: 5 } }}
            labels={["LINE"]}
          />
        </VictoryChart>
      </div>
    );
  }
}