import React from 'react';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
   margin: theme.spacing.unit,
 },
 extendedIcon: {
   marginRight: theme.spacing.unit,
 },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'400px',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.state = { godan: '1' };
    this.state = { error: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({latLng}))
      .catch(error => console.error('Error', error));
      this.setState({ address });
  };

  handeClick = buttonClick => {
    if (this.state.latLng) {
      this.setState({ error: '' })
      console.log('this.state.latLng',this.state.latLng)
    }
    else {
      this.setState({ error: 'Invalid format: ###-###-####' })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>

          <TableCell numeric={true}>
          <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <TextField
                    ref="search"
                    error= {this.state.error.length === 0 ? false : true }
                    id="outlinedname"
                    label="Search Places..."
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                    })}
                  />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                          ? 'suggestionitemactive'
                        : 'suggestionitem';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            </TableCell>
            <TableCell>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={this.handeClick}>
              <SearchIcon />
            </Button>
            </TableCell>
            </TableRow>
            </TableHead>
            </Table>
    );
  }
}

export default withStyles(styles)(LocationSearchInput);
