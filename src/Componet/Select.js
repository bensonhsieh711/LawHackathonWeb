import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
// import { RaisedButton } from 'material-ui';
// import Checkbox from '@material-ui/core/Checkbox';
import MultipleSelect from './MultipleSelect'
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
// import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import TextField from '@material-ui/core/TextField';
import axios from 'axios'

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

//const medias = ['PTT', 'TVBS', 'ETTODAY'];
const pttUrl = [
    ['牛郎喝到酒精中毒亡 法院首次', 'https://www.ptt.cc/bbs/Gossiping/M.1559175089.A.5CF.html'],
    ['派遣工淚哭法院爭權益 控告', 'https://www.ptt.cc/bbs/Gossiping/M.1559552992.A.FAA.html'],
    ['勇警張景義開槍擊斃拒捕竊賊', 'https://www.ptt.cc/bbs/Gossiping/M.1559196474.A.E18.html'],
];


const ettodayUrl = [
    ['遭監院彈劾草率起訴獲判免懲戒', 'https://www.ettoday.net/news/20190603/1459330.htm'],
    ['購物中心員工偷拍女同事裙底', 'https://www.ettoday.net/news/20190603/1459043.htm'],
    ['小三裸照嗆聲！老公養了她的孩子', 'https://www.ettoday.net/news/20190603/1459226.htm'],
];

const tvbsUrl = [
    ['女控刺青圖醜求償敗訴', 'https://news.tvbs.com.tw/local/1143610'],
    ['男借竹竿摘芒果摔死', 'https://news.tvbs.com.tw/local/1127982'],
    ['揭女童疑天天遭哥性侵', 'https://news.tvbs.com.tw/tech/1130420'],
];

class CustomizedSelects extends React.Component {
    state = {
        search: '',
        showCatagory: false,
        name: [],
        searchAreaExpend: true,
        resultAreaExpend: false,
        open: false,
        newsContent: '',
    };

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    keywordSearchchOnClick = () => {
        this.setState({ showCatagory: !this.state.showCatagory });
    }

    mongoTest = () => {
        var keyword = this.state.search;
        axios.post(`http://35.234.24.135:3200/casigo/account/fuzzyread`,
            { "opinion": keyword, "mainText": keyword, "reason": keyword }
        ).then(res => {
            console.log(res.data);
            alert('Success!')
        }).catch((err) => {
            console.log(err);
            alert('Fail!')
        })
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

    handleOpen = () => {
        this.setState({
            open: true,
            //newsContent: news
        })
    }

    handleListItemClick(value) {
        //onClose(value);
    }

    render() {
        const { classes } = this.props;

        var pttLinkList = pttUrl.map((url) =>
            <li><a target="_blank" href={url[1]}>{url[0]}</a></li>
        );

        var tvbsLinkList = tvbsUrl.map((url, idx) =>
            <li><a target="_blank" href={url[1]}>{url[0]}</a></li>
        );

        var ettodayLinkList = ettodayUrl.map((url, idx) =>
            <li><a target="_blank" href={url[1]}>{url[0]}</a></li>
        );

        return (
            <Card>
                <Collapse in={this.state.searchAreaExpend}>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel}>
                                輸入關鍵字
                            </InputLabel>
                            <BootstrapInput
                                value={this.state.search}
                                onChange={this.handleChange}
                            />
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
                    <Button variant="contained" color="primary" className={classes.margin} onClick={this.mongoTest}>
                        Mongo Test
                    </Button>
                </Collapse>
                <Collapse in={this.state.resultAreaExpend}>
                    <Button onClick={this.handleOpen}>案件一</Button>
                    <Button onClick={this.handleOpen}>案件二</Button>
                    <Button onClick={this.handleOpen}>案件三</Button>
                    <Button onClick={this.handleOpen}>案件四</Button>
                    <Dialog onClose={this.handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={this.state.open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            <ul>
                                <li>PTT
                                    <ul>
                                        {pttLinkList}
                                    </ul>
                                </li>
                                <li>TVBS
                                    <ul>
                                        {tvbsLinkList}
                                    </ul>
                                </li>
                                <li>ETTODAY
                                    <ul>
                                        {ettodayLinkList}
                                    </ul>
                                </li>
                            </ul>
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
