import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import MultipleSelect from './MultipleSelect'
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import Logo from '../MosongLogo.png'
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import classnames from 'classnames';

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
        //...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        //display: 'flex',
        //flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    bootstrapFormLabel: {
        fontSize: 20,
    },
    card: {
        //maxWidth: 400,
        maxWidth: "100%",
        backgroundColor: "#eeeeee",
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        //backgroundColor: red[500],
        //height: 200,
        //width: 200,
    },
});

//const ITEM_HEIGHT = 48;
//const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };

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

class SearchPage extends React.Component {
    state = {
        search: '',
        showCatagory: false,
        name: [],
        searchAreaExpend: true,
        resultAreaExpend: false,
        verdictContentOpen: false,
        newsContent: '',
        verdictList: [],
        dialogOpen: false,
    };

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    keywordSearchchOnClick = () => {
        this.setState({ showCatagory: !this.state.showCatagory });
    }

    mongoTest = () => {
        var keyword = this.state.search;
        axios.post(`http://35.234.24.135:3200/casigo/account/fizzyread`,
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
        var keyword = this.state.search;
        axios.post(`http://35.234.24.135:3200/casigo/account/fizzyread`,
            { "opinion": keyword, "mainText": keyword, "reason": keyword }
        ).then(res => {
            if (res.data) {
                this.setState({
                    searchAreaExpend: !this.state.searchAreaExpend,
                    resultAreaExpend: !this.state.resultAreaExpend,
                    verdictList: res.data
                })
            } else {
                this.setState({ verdictList: [] });
                alert("查無結果");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    handleVerdictContentClose = () => {
        this.setState({ 
            searchAreaExpend: !this.state.searchAreaExpend,
            resultAreaExpend: !this.state.resultAreaExpend,
        })
    }

    handleVerdictContentOpen = () => {
        //console.log(this.state.verdictList[idx]);
        this.setState({
            //verdictContentOpen: true,
            dialogOpen: true,
        })
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }

    handleDialogOpen = () => {
        this.setState({ dialogOpen: true })
    }

    handleListItemClick(value) {
        //onClose(value);
    }

    handleExpandClick = () => {
        this.setState(state => ({
            searchAreaExpend: !this.state.searchAreaExpend,
            resultAreaExpend: !this.state.resultAreaExpend,
        }));
    };

    render() {
        const { classes } = this.props;

        var pttLinkList = pttUrl.map((url, idx) =>
            <li key={idx}><a target="_blank" href={url[1]}>{url[0]}</a></li>
        );

        var tvbsLinkList = tvbsUrl.map((url, idx) =>
            <li key={idx}><a target="_blank" href={url[1]}>{url[0]}</a></li>
        );

        var ettodayLinkList = ettodayUrl.map((url, idx) =>
            <li key={idx}><a target="_blank" href={url[1]}>{url[0]}</a></li>
        );

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar src={Logo} aria-label="Recipe" className={classes.avatar} />
                            }
                            // action={
                            //     <IconButton>
                            //         <MoreVertIcon />
                            //     </IconButton>
                            // }
                            title="莫宋法律諮詢"
                            subheader="請在下方輸入關鍵字"
                        />
                        <Collapse in={this.state.searchAreaExpend}>
                            <CardContent>
                                <form className={classes.root} autoComplete="off">
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel}>
                                            輸入關鍵字</InputLabel>
                                        <BootstrapInput
                                            value={this.state.search}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel} />
                                        {this.state.showCatagory === true ? <MultipleSelect /> : null}
                                    </FormControl>
                                </form>
                                <Button variant="contained" color='secondary' className={classes.margin} onClick={this.keywordSearchchOnClick}>
                                    搜尋關鍵字</Button>
                                <Button variant="contained" color="primary" className={classes.margin} onClick={this.relativeSearchOnClick}>
                                    搜尋相關結果</Button>
                                <Button variant="contained" color="primary" className={classes.margin} onClick={this.mongoTest}>
                                    Mongo Test</Button>
                            </CardContent>
                        </Collapse>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.resultAreaExpend,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.resultAreaExpend}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.resultAreaExpend}>
                            {/* <Button onClick={this.handleOpen}>案件一</Button>
                    <Button onClick={this.handleOpen}>案件二</Button>
                    <Button onClick={this.handleOpen}>案件三</Button>
                    <Button onClick={this.handleOpen}>案件四</Button> */}
                            <ul>
                                {this.state.verdictList.map((verdict, index) => {
                                    return ([
                                        <li key={index}>{verdict.no}：{verdict.mainText}
                                            <IconButton
                                                className={classnames(classes.expand, {
                                                    [classes.expandOpen]: this.state.verdictContentOpen,
                                                })}
                                                onClick={this.handleVerdictContentOpen}
                                                aria-expanded={this.state.verdictContentOpen}
                                                aria-label="Show more"
                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </li>
                                    ]);
                                })}
                            </ul>
                            <Dialog onClose={this.handleDialogClose}
                                aria-labelledby="customized-dialog-title"
                                open={this.state.dialogOpen}>
                                <DialogTitle id="customized-dialog-title" onClose={this.handleDialogClose}>
                                    <ul>
                                        <li>PTT<ul>{pttLinkList}</ul>
                                        </li>
                                        <li>TVBS<ul>{tvbsLinkList}</ul>
                                        </li>
                                        <li>ETTODAY <ul>{ettodayLinkList}</ul>
                                        </li>
                                    </ul>
                                </DialogTitle>
                            </Dialog>
                            <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleVerdictContentClose}>
                                返回搜尋</Button>
                        </Collapse>
                    </Card>
                </Paper>
            </div>
        );
    }
}

SearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPage);
