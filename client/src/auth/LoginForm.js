import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
	body: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		background: '#ffffff'
	},
	bottom: {
		width: '100%',
		height: '10%',
		justifyContent: 'center',
	},
	top: {
		width: '100%',
    height: '20%',
		valign: 'top',
		justifyContent: 'center',
		padding: '200px'
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: '5px',
		alignItems: 'center'
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '100%',
		maxWidth: theme.spacing.unit * 100,
	},
	progress: {
		height: '10px',
		zIndex: 5000
	},
	textField: {
		marginTop: 0,
	},
	errorMsg: {
		color: '#FF5722'
	},
	loginButton: {
		width: '100%',
		height: '50px',
	},
	bottomButtons: {
		width: '75%',
		height: '3.5vh',
		color: '#6495ed',
		boxShadow: '0 0px 0px 0px',
	}
});

const LoginForm = (props) => {
        return (
        <div className={props.classes.body}>
			{props.loading &&
				<LinearProgress className={props.classes.progress}/>
			}
            <Grid className={props.classes.bottom} container spacing={0}>
                <Grid className={props.classes.container} item xs={9}>
								<br/>
								<img src="https://waterfallsofthegrandcanyon.com/wp-content/uploads/2016/01/beaver-falls.jpg"  height="400px"/>
                    <form className={props.classes.form} noValidate autoComplete="off" onSubmit={props.submit}>
                        <TextField
                            id="email"
                            label="Email"
                            className={props.classes.textField}
                            margin="normal"
                            fullWidth
                            error={props.msg  && true}
                            value={props.email}
                            onChange={props.updateEmail}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={props.classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            fullWidth
                            error={props.msg  && true}
                            value={props.password}
                            onChange={props.updatePassword}
                        />
						<Typography className={props.classes.errorMsg} type="caption">{props.msg}</Typography>
                        <Button className={props.classes.loginButton} type="submit">Login</Button>
                    </form>
                </Grid>
                <Grid className={props.classes.container} item xs={5}>
                    <Button onClick={props.signUpDialog} dense className={props.classes.bottomButtons}>Sign Up</Button>
                </Grid>
                <Grid className={props.classes.container} item xs={5}>
                    <Button onClick={props.forgotDialog} dense className={props.classes.bottomButtons}>Forgot</Button>
                </Grid>
            </Grid>
        </div>
        )
}

LoginForm.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(LoginForm));
