import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Client from './Client';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};


class TrailsList extends React.Component {

  state = {
      trails: []
    }

  componentDidMount() {
    //const searchQuery = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=100&key=200367496-d6de8db97c0a6ac416014fc58fe6c5fc'
    Client.search('40.0274', '-105.2519', data => {
        this.setState(data)
        });
  }
  render() {
    const { classes } = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Trail Name</TableCell>
            <TableCell numeric>Location</TableCell>
            <TableCell numeric># of votes</TableCell>
            <TableCell numeric>Ratings</TableCell>
            <TableCell numeric>Condition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.trails.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.location}</TableCell>
                <TableCell numeric>{n.starVotes}</TableCell>
                <TableCell numeric>{n.stars}</TableCell>
                <TableCell numeric>{n.conditionStatus}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

TrailsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrailsList);
