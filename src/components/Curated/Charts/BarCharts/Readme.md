Example of Bar Chart:

```jsx
const data = [
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
            ];
const barStyle = { data: { width: 15, fill: "green" } };
const lineStyle = { data: { stroke: "blue", strokeWidth: 5 } };
const onClickVariations = {barLabel: "Molecules", lineLabel: "Something"};

<BarChart data={data} 
          barStyle={barStyle}
          lineStyle={lineStyle}
          onClickVariations = {onClickVariations}
          />
```