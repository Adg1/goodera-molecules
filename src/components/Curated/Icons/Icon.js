import React from "react";
import PropTypes from 'prop-types';


/**
 * Icon
 */
export default class Icon extends React.Component {

  static propTypes = {
    /** Icon svg value */
    icon: PropTypes.object.isRequired,
    /** Size in number. For eg: 16 for 16px */
    size: PropTypes.number,
    /** Hex value of color */
    color: PropTypes.string.isRequired,
  }

  static defaultProps = {
    size: 16,
  }

  render() {
    const styles = {
      svg: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      path: {
        fill: this.props.color,
      },
    };

    return (
      <svg
        style={styles.svg}
        width={`${this.props.size}px`}
        height={`${this.props.size}px`}
        viewBox={`0 0 ${this.props.icon.viewBox} ${this.props.icon.viewBox}`}
      >
        <path
          style={styles.path}
          d={this.props.icon.d}
        ></path>
      </svg>
    );
  }
}