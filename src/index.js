import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Avatar from '@material-ui/core/Avatar';
import Selects from './Componet/Select'
import logo from './MosongLogo.png'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        console.log(logo);
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                {/* <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                            <MenuItem primaryText="CV" />
                            <MenuItem primaryText="Contact me" />
                            <MenuItem primaryText="Help &amp; feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Sign out" />
                        </Menu>
                </Popover> */}
                {/* <AppBar style={{ fontFamily: 'Microsoft JhengHei' }}
                    title='莫訟 No-Suit' onClick={this.handleTouchTap} /> */}
                {/* <img src='src/MosongLogo.png' width={'80%'} height={'100%'} /> */}
                <img src={logo} alt="Logo" width={'5%'} height={'20%'} />
                <h1>莫訟 No-Suit</h1>
                <Selects />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
