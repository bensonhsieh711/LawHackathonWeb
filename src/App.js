import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Route } from 'react-router-dom';
import SearchPage from './Componet/SearchPage';
import MultipleSelect from './Componet/MultipleSelect';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/" exact component={SearchPage} />
        <Route path="/search/:keyword" render={(props) => <SearchPage {...props} />} />
        <Route path="/test" exact component={MultipleSelect} />
        <Route path="/test/:parms" exact component={(props) => <MultipleSelect {...props}/>} />
      </MuiThemeProvider>
    )
  }
}
export default App;