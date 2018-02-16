import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  paper: {
    height: 320,
    width: 320,
  },
  control: {
    padding: theme.spacing.unit * 2,
  }
});

class Page2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      year: "2018",
      data: {}
    };
    this.getData();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

  };

  getData = () => {
      // API calls to fetch data
      var year = this.state.year;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{float:"right"}}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="year">Year</InputLabel>
          <Select
            value={this.state.year}
            onChange={this.handleChange}
            inputProps={{
              name: 'year',
              id: 'year',
            }}
          >
            <MenuItem value={"2015"}>2015</MenuItem>
            <MenuItem value={"2016"}>2016</MenuItem>
            <MenuItem value={"2017"}>2017</MenuItem>
            <MenuItem value={"2018"}>2018</MenuItem>
          </Select>
        </FormControl>
        </div>
        <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="space-around" spacing={16}>
            
              <Grid key={0} item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid key={1} item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid key={2} item>
                <Paper className={classes.paper} />
              </Grid>
          </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Page2);
