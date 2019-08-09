import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Route } from 'react-router-dom';
import { Index } from './Page';
import SearchPage from './Componet/SearchPage';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends React.Component {
  render() {
    // console.log(this.props.location.search);
    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/" exact component={Index} />
        <Route path="/search/:keyword" render={(props) => <SearchPage {...props} />} />
      </MuiThemeProvider>
    )
  }
}
export default App;