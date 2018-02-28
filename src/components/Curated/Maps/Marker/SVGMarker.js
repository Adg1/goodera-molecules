import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import PropTypes from 'prop-types';

import mapData from './world-50m.json';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const include = [
  "ARG", "BOL", "BRA", "CHL", "COL", "ECU",
  "GUY", "PRY", "PER", "SUR", "URY", "VEN",
]

class SVGMarker extends Component {
  static propTypes = {
    /** markers data; Array of ```{ markerOffset: -35, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] }``` values */
    markersData: PropTypes.array.isRequired,
  }
  
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 800 }}
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[ -60, -25 ]} disablePanning>
            <Geographies geography={mapData}>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.id) !== -1 && (
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
                          fill: "#CFD8DC",
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
                  )
                )
              }
            </Geographies>
            <Markers>
              {this.props.markersData.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { stroke: "#455A64" },
                    hover: { stroke: "#FF5722" },
                    pressed: { stroke: "#FF5722" },
                  }}
                  >
                  <g transform="translate(-12, -24)">
                    <path
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                    />
                    <circle
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      cx="12"
                      cy="9"
                      r="3"
                    />
                  </g>
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#607D8B",
                      stroke: "none",
                    }}
                    >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default SVGMarker;