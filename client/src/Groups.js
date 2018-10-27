import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Client from './Client';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[800],
    },
  },
  signUpButton: {
    width: '100%',
    height: '50px',
    fontcolor: '#FF5722',
  },
  textField: {
      width: '50%',
  },
  form: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      align: 'center',
      justifyContent: 'center',
      paddingRight: '18px'
  },
});

class Groups extends React.Component {
	constructor(props) {
          super(props);
          this.state = {
              expanded:null,
							groups:[],
          };
          this.componentDidMount = this.componentDidMount.bind(this);

      }
      componentDidMount() {
    		Client.getGroups(data => {
    				this.setState(data);
    				});
    				console.log('GGGGGG::::', this.state);
    	}

   handleChange = panel => (event, expanded) => {
     this.setState({
       expanded: expanded ? panel : false,
     });
   };

   handleAddGroup = (e) => {
     /* api.writeGroupData(this.inputNode.value)
     .catch((error) => {
       console.log(error.message);
       });
       this.state.expanded = false;
       this.handleChange('panel1');
       this.forceUpdate(); */
   };


  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

  return (
    <div>
    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
  <ExpansionPanelSummary expandIcon={
    <Icon className={classes.iconHover} color="blue" style={{ fontSize: 30 }}>
         add_circle
    </Icon>
    }>
    <Typography className={classes.heading}>Add new Group</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
     <Typography>
    <form noValidate autoComplete="off">
        <TextField
            id="groupname"
            label="Group name.."
            type="text"
            margin="normal"
            fullWidth
            inputRef={node => this.inputNode = node}
        />
        <Button className={classes.signUpButton} onClick={this.handleAddGroup} type="button">Save</Button>
    </form>
    </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
				<Paper className={classes.root}>
		      <Table className={classes.table}>
		        <TableHead className={classes.tablehead}>
		          <TableRow>
		            <TableCell>Group Name</TableCell>
		            <TableCell numeric>Location</TableCell>
		          </TableRow>
		        </TableHead>
						<TableBody>
		        </TableBody>
		      </Table>
		    </Paper>
    </div>

  );
}
}

Groups.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Groups);
