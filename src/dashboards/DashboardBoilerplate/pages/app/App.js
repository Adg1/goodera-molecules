import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import logo from './logo.svg';
import './App.css';

const styles = theme => ({
  header: {
    'backgroundColor': theme.palette.primary.light
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className={classes.header}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Goodera Clients</h1>
        </header>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
