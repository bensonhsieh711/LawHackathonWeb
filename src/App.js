import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Route } from 'react-router-dom';
import SearchPage from './Componet/SearchPage';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/:keyword" render={(props) => <SearchPage {...props} />} />
        <Route path="/" exact component={SearchPage} />
        {/* <Route path="/search/:keyword" render={(props) => <SearchPage {...props} />} /> */}
      </MuiThemeProvider>
    )
  }
}
export default App;