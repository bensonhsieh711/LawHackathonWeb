import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from '../MosongLogo.png'
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import classnames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';

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
    topic: {
        color: 'red',
    }
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

const category = [
    '殺人',
    '鄭傑',
    '槍枝',
    '幫派鬥爭',
    '四海幫',
];

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
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            Urlkeyword: this.props.match.params.keyword ? this.props.match.params.keyword : null,
            showKeywordList: false,
            keywordList: [],
            searchAreaExpend: false,
            resultAreaExpend: false,
            verdictContentExpend: false,
            newsContent: '',
            verdictList: [],
            dialogOpen: false,
            verdict: '',
            identityDialogOpen: true,
            indentity: 0, //預設一般民眾
            showSearchVerdictBtn: false,
            showSearchKeywordBtn: true,
        };
        //console.log(this.props)
    }

    handleInputChange = (e) => {
        this.setState({ keyword: e.target.value });
    }

    keywordSearchchOnClick = () => {
        this.setState({ showKeywordList: true });
    }

    mongoTest = () => {
        var keyword = this.state.keyword;
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

    autoSearch = (keyword) => {
        axios.post(`http://35.234.24.135:3200/casigo/account/fizzyread`,
            { "opinion": keyword, "mainText": keyword, "reason": keyword }
        ).then(res => {
            if (res.data) {
                if (res.data.length > 0) {
                    this.setState({ verdictList: res.data });
                } else {
                    this.setState({ verdictList: [] });
                    alert("查無結果");
                }
            } else {
                this.setState({ verdictList: [] });
                alert("查無結果");
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            this.setState({
                searchAreaExpend: false,
                resultAreaExpend: true,
                Urlkeyword: null,
            })
        })
    }

    relativeSearchOnClick = (keyword) => {
        if (keyword && keyword.length > 0) {
            axios.post(`http://35.234.24.135:3200/casigo/account/fizzyread`,
                { "opinion": keyword, "mainText": keyword, "reason": keyword }
            ).then(res => {
                if (res.data) {
                    this.setState({ verdictList: res.data });
                } else {
                    this.setState({ verdictList: [] });
                    alert("查無結果");
                }
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                this.setState({
                    searchAreaExpend: false,
                    resultAreaExpend: true,
                    Urlkeyword: null,
                })
            })
        } else {
            alert("請輸入相關詞彙或描述");
        }
    }

    handleVerdictListClose = () => {
        this.setState({
            searchAreaExpend: true,
            resultAreaExpend: false,
            verdictContentExpend: false,
        })
    }

    handleVerdictContentOpen = (verdict) => {
        //console.log(verdict);
        this.setState({
            verdict: verdict,
            searchAreaExpend: false,
            resultAreaExpend: false,
            verdictContentExpend: true
        })
    }

    handleVerdictContentClose = () => {
        this.setState({
            searchAreaExpend: false,
            resultAreaExpend: true,
            verdictContentExpend: false,
        })
    }

    handleIdentityDialogClose = () => {
        this.setState({
            identityDialogOpen: false,
            searchAreaExpend: true,
            showSearchKeywordBtn: this.state.indentity === 0 ? true : false,
            showSearchVerdictBtn: this.state.indentity === 0 ? false : true,
            showKeywordList: false,
            keywordList: []
        })
    }

    handleIdentityDialogOpen = () => {
        this.setState({ identityDialogOpen: true })
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }

    handleDialogOpen = () => {
        this.setState({ dialogOpen: true })
    }

    handleExpandClick = () => {
        this.setState({
            searchAreaExpend: !this.state.searchAreaExpend,
            resultAreaExpend: !this.state.resultAreaExpend,
        });
    };

    handleSelectChange = (event) => {
        this.setState({ indentity: event.target.value });
    }

    convertToShortText = (text, length) => {
        let result = '';
        if (text && text.length > length) {
            result = text.substr(0, length).concat('....');
        } else {
            result = text;
        }
        return result;
    }

    searchBySelectOnClick = () => {
        if (this.state.keywordList && this.state.keywordList.length > 0) {
            let keyword = this.state.keywordList[0];
            axios.post(`http://35.234.24.135:3200/casigo/account/fizzyread`,
                { "opinion": keyword, "mainText": keyword, "reason": keyword }
            ).then(res => {
                if (res.data) {
                    if (res.data.length === 0) {
                        this.setState({ verdictList: [] });
                        alert("查無結果");
                    } else {
                        this.setState({
                            searchAreaExpend: false,
                            resultAreaExpend: true,
                            verdictList: res.data
                        })
                    }
                } else {
                    this.setState({ verdictList: [] });
                    alert("查無結果");
                }
            }).catch((err) => {
                console.log(err);
            })
        } else {
            alert("請選擇一個以上相近關鍵字！")
        }
    }

    handleMutiSelectChange = (event) => {
        let array = [];
        for (let i = 0; i < event.target.value.length; i++) {
            if (array.indexOf(event.target.value[i]) === -1) {
                array.push(event.target.value[i]);
            }
        }
        this.setState({ keywordList: array });
    }

    render() {
        if (this.state.Urlkeyword !== null) {
            this.autoSearch(this.state.Urlkeyword);
        };
        const { classes } = this.props;

        let indentityName = `目前身分：${this.state.indentity === 0 ? '一般民眾' : '律師'}`;
        let pttLinkList = pttUrl.map((url, idx) =>
            // <li key={idx}><a target="_blank" href={url[1]}>{url[0]}</a></li>
            <ListItem component='a' key={idx} target="_blank" href={url[1]}>{url[0]}</ListItem >
        );

        let tvbsLinkList = tvbsUrl.map((url, idx) =>
            // <li key={idx}><a target="_blank" href={url[1]}>{url[0]}</a></li>
            <ListItem component='a' key={idx} target="_blank" href={url[1]}>{url[0]}</ListItem >
        );

        let ettodayLinkList = ettodayUrl.map((url, idx) =>
            // <li key={idx}><a target="_blank" href={url[1]}>{url[0]}</a></li>
            <ListItem component='a' key={idx} target="_blank" href={url[1]}>{url[0]}</ListItem >
        );

        let VerdictContent = this.state.verdict ? <p>
            <b className={classes.topic}>種類</b>:{this.state.verdict.sys}<br />
            <b className={classes.topic}>日期</b>:{new Date(this.state.verdict.date).toLocaleDateString()}<br />
            <b className={classes.topic}>文號:</b>{this.state.verdict.no}<br />
            <b className={classes.topic}>判決內容:</b>{this.state.verdict.judgement}<br /><br />
            <b className={classes.topic}>法律見解:</b>{this.state.verdict.opinion}<br /><br />
            <b className={classes.topic}>主要內容:</b>{this.state.verdict.mainText}
        </p> : null;

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
                            subheader={indentityName}
                            onClick={this.handleIdentityDialogOpen}
                        />
                        <Collapse in={this.state.searchAreaExpend}>
                            <CardContent>
                                <form className={classes.root} autoComplete="off">
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel}>
                                            輸入關鍵字</InputLabel>
                                        <BootstrapInput
                                            value={this.state.keyword}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="search-customized-select" className={classes.bootstrapFormLabel} />
                                        {this.state.showKeywordList === true ?
                                            <FormControl className={classes.margin}>
                                                <InputLabel htmlFor="select-multiple-checkbox" className={classes.bootstrapFormLabel}>關鍵字</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.state.keywordList}
                                                    onChange={this.handleMutiSelectChange}
                                                    input={<Input id="select-multiple-checkbox" />}
                                                    renderValue={selected => selected.join(', ')}
                                                    MenuProps={MenuProps}
                                                >
                                                    {category.map(c => (
                                                        <MenuItem key={c} value={c}>
                                                            <Checkbox checked={this.state.keywordList.indexOf(c) > -1} />
                                                            <ListItemText primary={c} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                <FormHelperText>請選擇相關字詞</FormHelperText>
                                            </FormControl> : null}
                                    </FormControl>
                                </form>
                                {this.state.showSearchKeywordBtn ?
                                    <Button variant="contained" color='secondary' className={classes.margin} onClick={this.keywordSearchchOnClick}>
                                        搜尋關鍵字</Button> : null}
                                {this.state.showSearchVerdictBtn ?
                                    <Button variant="contained" color="primary" className={classes.margin} onClick={() => this.relativeSearchOnClick(this.state.keyword)}>
                                        搜尋相關判決書內容</Button> : null}
                                {this.state.showKeywordList === true ?
                                    <Button variant="contained" color="primary" className={classes.margin} onClick={() => this.searchBySelectOnClick()}>
                                        搜尋相關判決書內容</Button> : null}
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
                            <List>
                                {this.state.verdictList.map((verdict, index) => {
                                    return ([
                                        <ListItem key={index} button>
                                            <ListItemText key={index} onClick={() => { this.handleVerdictContentOpen(verdict) }}>
                                                {new Date(verdict.date).toLocaleDateString()}：{verdict.no} {this.convertToShortText(verdict.mainText, 15)}</ListItemText>
                                        </ListItem>
                                    ]);
                                })}
                            </List>
                            <Dialog onClose={this.handleDialogClose}
                                aria-labelledby="customized-dialog-title"
                                open={this.state.dialogOpen}>
                                <DialogTitle id="customized-dialog-title" onClose={this.handleDialogClose}>
                                    <List>
                                        <ListItem>PTT<List>{pttLinkList}</List>
                                        </ListItem>
                                        <ListItem>TVBS<List>{tvbsLinkList}</List>
                                        </ListItem>
                                        <ListItem>ETTODAY <List>{ettodayLinkList}</List>
                                        </ListItem>
                                    </List>
                                </DialogTitle>
                            </Dialog>
                            <Dialog onClose={this.handleIdentityDialogClose}
                                aria-labelledby="customized-dialog-title"
                                open={this.state.identityDialogOpen}>
                                <DialogTitle id="customized-dialog-title">
                                    <FormControl>
                                        <InputLabel htmlFor="indentity-native-helper">身分</InputLabel>
                                        <Select
                                            value={this.state.indentity}
                                            onChange={this.handleSelectChange}
                                            input={<Input name="indentity" id="indentity-native-helper" />}
                                        >
                                            <MenuItem value={0}>一般民眾</MenuItem>
                                            <MenuItem value={1}>律師</MenuItem>
                                        </Select>
                                        <FormHelperText>請選擇您的身分</FormHelperText>
                                        <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleIdentityDialogClose}>
                                            確認</Button>
                                    </FormControl>
                                </DialogTitle>
                            </Dialog>
                            <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleVerdictListClose}>
                                返回搜尋</Button>
                        </Collapse>
                        <Collapse in={this.state.verdictContentExpend}>
                            {VerdictContent}
                            <Button variant="contained" className={classes.margin} onClick={this.handleDialogOpen}>
                                相關社群文章</Button>
                            <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleVerdictContentClose}>
                                返回內容</Button>
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
