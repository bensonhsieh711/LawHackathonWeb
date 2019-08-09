import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';

class Index extends React.Component {
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
        return (
            <BrowserRouter>
                <Switch>
                    <App />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
//registerServiceWorker();
