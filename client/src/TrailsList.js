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
import LocationSearchInput from './GoogleMaps';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class TrailsList extends React.Component {
  searchInput = React.createRef();
  constructor(props) {
          super(props);
          this.state = {
              trails: [],
              latLng:'',
          };
          this.handler = this.handler.bind(this)

      }

    handler(e) {
      if (this.searchInput.current.props.value) {
        const address = this.searchInput.current.props.value;
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng =>
            Client.search(latLng.lat, latLng.lng, data => {
                this.setState(data)
                })
          )
          .catch(error => console.error('Error', error));
      } else {
          this.state.error = 'Error';
      }

    }
  componentDidMount() {
    //const searchQuery = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=100&key=200367496-d6de8db97c0a6ac416014fc58fe6c5fc'
    Client.search('33.7288935', '-112.2840607', data => {
        this.setState(data)
        });
        console.log('GODSUD',this.state);

  }

  render() {
    const { classes } = this.props;

  return (
    <Paper className={classes.root}>
    <LocationSearchInput handler = {this.handler.bind(this)} ref="search" searchInput={this.searchInput}  />
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell>Trail Name</TableCell>
            <TableCell numeric>Location</TableCell>
            <TableCell numeric># of votes</TableCell>
            <TableCell numeric>Ratings</TableCell>
            <TableCell numeric>Preview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.trails.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  <a href={n.url} target="_blank">{n.name}</a>
                </TableCell>
                <TableCell numeric>{n.location}</TableCell>
                <TableCell numeric>{n.starVotes}</TableCell>
                <TableCell numeric>{n.stars}</TableCell>
                <TableCell numeric><img className="avatar" src={n.imgSqSmall} alt={n.name}/></TableCell>
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
