import React, { Component } from 'react';
import logo from './logo.svg';
import './Page1.css';
import ResponsiveDrawer from '../../../../components/ResponsiveDrawer/ResponsiveDrawer';
import Button from '../../../../components/Button/Button';
import data from '../../public/world-50m.json';

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class Page1 extends Component {
  render() {
    return (
      <div className="App">
        <ResponsiveDrawer>
        <Button>hbjjhjbj</Button>
          <div style={wrapperStyles}>
            <ComposableMap
              projectionConfig={{
                scale: 205,
                rotation: [-11, 0, 0],
              }}
              width={980}
              height={551}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <ZoomableGroup center={[0, 20]} disablePanning>
                <Geographies geography={data}>
                  {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  ))}
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </ResponsiveDrawer>
        
      </div>
    );
  }
}

export default Page1;
