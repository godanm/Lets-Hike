import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    flex: {
        flex: 1,
        textAlign: 'right',
        paddingBottom: 0,
        marginBottom: '-18px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingRight: '18px',
        paddingLeft: '18px',
    },
    signUpBottom: {
        height: '60px',
        marginTop: '16px',
        width: '50%'
    },
    errorMsg: {
        color: '#FF5722',
        textAlign: 'center',
        width: '100%'
	},
});


const ForgotForm = (props) => {
    return (
      <div>
        <Dialog
            ignoreBackdropClick={true}
            open = {props.open}
            onRequestClose={props.close}
        >
        <DialogTitle className={props.classes.flex}>
            <IconButton color="contrast" onClick={props.close} aria-label="Close">
                <CloseIcon />
              </IconButton></DialogTitle>
          <DialogContent className={props.classes.container}>
          <form className={props.classes.form} noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
				<TextField
					id="email"
					label="Email"
					className={props.classes.textField}
					margin="normal"
					fullWidth
					error={props.msg !== 'Password reset email sent.' && true}
					value={props.email}
					onChange={props.updateEmail}
				/>
                <Typography className={props.classes.errorMsg} type="caption">{props.msg}</Typography>
				<Button disabled={props.msg === 'Password reset email sent.'} className={props.classes.signUpBottom} onClick={props.submit} type="button">Send EMail</Button>
			</form>
            </DialogContent>
        </Dialog>
      </div>
    );
}

ForgotForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(ForgotForm));
