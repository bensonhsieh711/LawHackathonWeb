import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { RaisedButton } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MultipleSelect from './MultipleSelect'
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

class CustomizedSelects extends React.Component {
    state = {
        search: '',
        showCatagory: false,
        name: [],
        searchAreaExpend: true,
        resultAreaExpend: false,
        open: false,
    };

    handleChange = event => {
        this.setState({ search: event.target.value });
    };

    keywordSearchchOnClick = () => {
        this.setState({ showCatagory: !this.state.showCatagory });
    }

    relativeSearchOnClick = () => {
        this.setState({
            searchAreaExpend: !this.state.searchAreaExpend,
            resultAreaExpend: !this.state.resultAreaExpend
        });
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleOpen = (eventName) => {
        this.setState({ 
            open: true,
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Card>
                <Collapse in={this.state.searchAreaExpend}>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel}>
                                輸入關鍵字
                            </InputLabel>
                            <BootstrapInput />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel} />
                            {this.state.showCatagory == true ? <MultipleSelect /> : null}
                        </FormControl>
                    </form>
                    <Button variant="contained" color='secondary' className={classes.margin} onClick={this.keywordSearchchOnClick}>
                        搜尋關鍵字
                    </Button>
                    <Button variant="contained" color="primary" className={classes.margin} onClick={this.relativeSearchOnClick}>
                        搜尋相關結果
                    </Button>
                </Collapse>
                <Collapse in={this.state.resultAreaExpend}>
                    <Button onClick={this.handleOpen}>案件一</Button>
                    <Button onClick={this.handleOpen}>案件二</Button>
                    <Button onClick={this.handleOpen}>案件三</Button>
                    <Dialog onClose={this.handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={this.state.open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                           新聞相關連結
                        </DialogTitle>                        
                    </Dialog>
                    <Button variant="contained" color="primary" className={classes.margin} onClick={this.relativeSearchOnClick}>
                        返回搜尋
                    </Button>
                </Collapse>
            </Card>
        );
    }
}

CustomizedSelects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSelects);