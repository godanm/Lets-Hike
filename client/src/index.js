import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
	palette: {
     primary: {
       // light: will be calculated from palette.primary.main,
       main: '#000080',
       // dark: will be calculated from palette.primary.main,
       // contrastText: will be calculated to contrast with palette.primary.main
     },
     secondary: {
       light: '#0066ff',
       main: '#0044ff',
       // dark: will be calculated from palette.secondary.main,
       contrastText: '#ffcc00',
     },
     // error: will use the default color
   },
});

ReactDOM.render(
    <MuiThemeProvider theme={globalTheme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
