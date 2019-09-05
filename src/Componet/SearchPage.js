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
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250,
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
        //color: 'red',
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

const keywordTestList = [
    '家暴', '離婚', '民法訴訟'
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

const testVerdict = [
    {
        "court": "最高法院",
        "date": "2018-12-12T00:00:00+08:00",
        "no": "107,台上,2493",
        "sys": "民事",
        "reason": "請求離婚",
        "judgement": "最高法院民事裁定\r\n一○六年度台上字第一八○○號上　訴　人　蕭○○訴訟代理人　朱清雄律師被 上訴 人　柯○○訴訟代理人　潘欣欣律師上列當事人間請求離婚等事件，上訴人對於中華民國一○六年四月十一日台灣高等法院台中分院第二審判決（一○六年度家上字第六號），提起上訴。",
        "mainText": "主文上訴駁回。第三審訴訟費用由上訴人負擔。",
        "opinion": "理由按上訴第三審法院，非以原判決違背法令為理由，不得為之。又提起上訴，上訴狀內應記載上訴理由，表明原判決所違背之法令及其具體內容，暨依訴訟資料合於該違背法令之具體事實，其依民事訴訟法第四百六十九條之一規定提起上訴者，並應具體敘述為從事法之續造、確保裁判之一致性或其他所涉及之法律見解具有原則上重要性之理由。同法第四百六十七條、第四百七十條第二項定有明文。而依同法第四百六十八條規定，判決不適用法規或適用不當者，為違背法令；依同法第四百六十九條規定，判決有該條所列各款情形之一者，為當然違背法令。是當事人提起上訴，如以同法第四百六十九條所列各款情形為理由時，其上訴狀或理由書應表明該判決有合於各該條款規定情形之具體內容，及係依何訴訟資料合於該違背法令之具體事實。如依同法第四百六十八條規定，以原判決有不適用法規或適用法規不當為理由時，其上訴狀或理由書應表明該判決所違背之法令條項，或有關判例、解釋字號，或成文法以外之習慣或法理等及其具體內容，暨係依何訴訟資料合於該違背法令之具體事實，並具體敘述為從事法之續造、確保裁判之一致性或其他所涉及之法律見解具有原則上重要性之理由。上訴狀或理由書如未依上述方法表明，或其所表明者與上開法條規定不合時，即難認為已合法表明上訴理由，其上訴自非合法。上開規定，依家事事件法第五十一條規定，於家事訴訟事件準用之。本件上訴人對於原判決提起上訴，雖以該判決違背法令為由，惟核其上訴理由狀所載內容，係就原審取捨證據、認定事實之職權行使所論斷：兩造婚姻關係存續中，上訴人長期酗酒成癮，多次酒後辱罵、恐嚇、施暴被上訴人，雖其目前參與酒癮戒治教育期間穩定出席，對家暴之認知有所提升，惟對於其實施家暴行為損害兩造之婚姻關係，仍無法積極面對溝通處理，兩造婚姻已生破綻而無回復之望，有難以維持之重大事由，被上訴人請求離婚，為有理由等情，指摘其為不當，並就原審所為論斷，泛言未論斷或論斷矛盾、違法，而非表明該判決所違背之法令及其具體內容，暨依訴訟資料合於該違背法令之具體事實，並具體敘述為從事法之續造、確保裁判之一致性或其他所涉及之法律見解具有原則上重要性之理由，難認其已合法表明上訴理由。依首揭說明，應認其上訴為不合法。末查原審斟酌上訴人婚後長期酗酒成癮，多次酒後辱罵、恐嚇、施暴被上訴人，雖其目前參與酒癮戒治教育期間穩定出席，對家暴之認知有所提升，惟對於其實施家暴行為損害兩造之婚姻關係，仍無法積極面對溝通處理等情，認兩造婚姻已生破綻而無回復之望，有難以維持之重大事由，爰為上訴人敗訴之判決，經核並無違背法令情形，附此敘明。據上論結，本件上訴為不合法。依家事事件法第五十一條，民事訴訟法第四百八十一條、第四百四十四條第一項、第九十五條、第七十八條，裁定如主文。",
        "summary": '"非以原判決違背法令為理由","表明原判決所違背之法令及其具體內容","難認其已合法表明上訴理由"',
        "relatedIssues": [
            {
                "lawName": "家事事件法",
                "issueRef": "51"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "78"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "95"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "444"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "467"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "468"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "469"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "469 1"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "470"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "481"
            }
        ],
    },
    {
        "court": "最高法院",
        "date": "2017-06-22T00:00:00+08:00",
        "no": "106,台上,1800",
        "sys": "民事",
        "reason": "請求離婚等",
        "judgement": "最高法院民事裁定\r\n107年度台上字第2493號上　訴　人　劉性卿訴訟代理人　林宜慶律師被　上訴人　陳秀卿上列當事人間請求離婚事件，上訴人對於中華民國107年9月5 日臺灣高等法院臺中分院第二審判決（107年度家上字第6號），提起上訴。",
        "mainText": "主文上訴駁回。第三審訴訟費用由上訴人負擔。",
        "opinion": "理由按上訴第三審法院，非以原判決違背法令為理由，不得為之。又提起上訴，上訴狀內應記載上訴理由，其以民事訴訟法第469條所定事由提起第三審上訴者，應於上訴狀內表明：原判決所違背之法令及其具體內容、暨依訴訟資料合於該違背法令之具體事實。其依同法第469條之1規定提起上訴者，並應具體敘述為從事法之續造、確保裁判之一致性或其他所涉及之法律見解具有原則上重要性之理由。同法第467條、第470條第2項分別定有明文。而依同法第468條規定，判決不適用法規或適用不當者，為違背法令；依同法第469條規定，判決有該條所列各款情形之一者，為當然違背法令。是當事人提起第三審上訴，如合併以同法第469條及第469條之1之事由為上訴理由時，其上訴狀或理由書應表明該判決所違背之法令條項，或有關判例、解釋字號，或成文法以外之習慣或法理等及其具體內容，暨係依何訴訟資料合於該違背法令之具體事實，並具體敘述為從事法之續造、確保裁判之一致性或其他所涉及之法律見解具有原則上重要性之理由。如未依上述方法表明，或其所表明者與上開法條規定不合時，即難認為已合法表明上訴理由，其上訴自非合法。上開規定，於家事訴訟事件，依家事事件法第51條規定，亦應準用之。本件上訴人對於原判決提起第三審上訴，雖以該判決違背法令為由，惟核其上訴理由狀所載內容，係就原審取捨證據、認定事實之職權行使所論斷：兩造於民國73年8月30日結婚，被上訴人係因上訴人之舉止造成其長期心理不安，及聽聞上訴人可能有外遇，始於雙方爭執時，質疑上訴人有外遇，客觀上難謂已使上訴人受其不堪同居之虐待；被上訴人雖因心感委曲而於105年8月3日離家，然上訴人不僅於被上訴人（同年10月13日）返家時對其施以家庭暴力，且囑第三人向被上訴人取回住家鑰匙，並設立被上訴人返家同居之障礙，難認被上訴人惡意遺棄上訴人在繼續狀態中；兩造之婚姻破綻，上訴人應負較重之責任。上訴人依民法第1052條第1項第3款、第5款及第2項規定，請求判決兩造離婚，為無理由等情，指摘為不當，並就原審命為辯論及已論斷或其他贅述與判決結果無影響者，泛言為未論斷或論斷違法，而非表明該判決所違背之法令及其具體內容，暨依訴訟資料合於該違背法令之具體事實，更未具體敘述為從事法之續造、確保裁判之一致性或其他所涉及之法律見解具有原則上重要性之理由，難認其已合法表明上訴理由。依首揭說明，應認其上訴為不合法。據上論結，本件上訴為不合法。依家事事件法第51條，民事訴訟法第481條、第444條第1項、第95條、第78條，裁定如主文。",
        "summary": '"應於上訴狀內表明：原判決所違背之法令及其具體內容、暨依訴訟資料合於該違背法令之具體事實","本件上訴人對於原判決提起第三審上訴","非以原判決違背法令為理由"',
        "relatedIssues": [
            {
                "lawName": "家事事件法",
                "issueRef": "51"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "78"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "95"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "444"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "467"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "468"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "469"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "469 1"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "470"
            },
            {
                "lawName": "民事訴訟法",
                "issueRef": "481"
            },
            {
                "lawName": "民法",
                "issueRef": "1052"
            }
        ],
    },
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
            isAutoSearch: this.props.match.params.keyword ? true : false,
            verdict: '',
            identityDialogOpen: this.props.match.params.keyword ? false : true,
            //role: this.props.match.params.keyword ? 1 : 0, //0:一般民眾, 1:律師
            role: 0, //0:一般民眾, 1:律師
            showSearchVerdictBtn: false,
            showSearchKeywordBtn: true,
            //userid: this.props.match.params.keyword ? '匿名搜尋' : '',
            userid: "",
            msg: "",
            isOpenMsg: false,
            category: [],
            demoMode: false,
            isLoading: false,
        };
        //console.log(this.props)
    }

    componentWillMount = () => {
        if (this.state.Urlkeyword !== null) {
            this.autoSearch(this.state.Urlkeyword);
        };
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    keywordSearchchOnClick = () => {
        if (this.state.keyword === "離婚案例") {
            this.setState({
                demoMode: true,
                category: keywordTestList,
                showKeywordList: true,
                isOpenMsg: true,
                msg: '查詢成功',
            });
        } else {
            this.setState({
                isLoading: true,
                showKeywordList: false,
            });
            axios.get(`http://35.234.24.135:3300/word2vec?keyword=${this.state.keyword}`)
                .then(res => {
                    if (res.data && res.data.result !== "w2v error") {
                        if (res.data.result.length > 0) {
                            this.setState({
                                keywordList: [],
                                category: res.data.result,
                                showKeywordList: true,
                                isOpenMsg: true,
                                msg: '查詢成功',
                            });
                        } else {
                            this.setState({
                                keywordList: [],
                                category: [],
                                showKeywordList: false,
                                isOpenMsg: true,
                                msg: '查無資料',
                            })
                        }
                    } else {
                        this.setState({
                            keywordList: [],
                            category: [],
                            showKeywordList: false,
                            isOpenMsg: true,
                            msg: '查無資料',
                        })
                    }
                }).catch((err) => {
                    console.log(err);
                    this.setState({
                        keywordList: [],
                        category: [],
                        showKeywordList: false,
                        isOpenMsg: true,
                        msg: '查無資料',
                    })
                }).finally(() => {
                    this.setState({ isLoading: false })
                })
        }
    }

    autoSearch = (search) => {
        let keywordArray = search.split("_");
        if (search === "恐嚇_施暴" || search === "離婚_外遇" || search === "老公_外遇_吵架_酗酒_家暴_虐待_離婚") {
            this.setState({
                verdictList: search === "老公_外遇_吵架_酗酒_家暴_虐待_離婚" ? testVerdict : "恐嚇_施暴" ? [testVerdict[0]] : [testVerdict[1]],
                //verdict: search === "恐嚇_施暴" ? testVerdict[0] : testVerdict[1],
                keywordList: keywordArray,
                verdictContentExpend: false,
                resultAreaExpend: true,
                Urlkeyword: null,
                isAutoSearch: true,
                identityDialogOpen: false,
                isOpenMsg: true,
                demoMode: true,
                msg: '查詢成功',
            })
        } else {
            axios.post('http://35.234.24.135:3200/casigo/account/fizzytfidfread',
                { "tfidf": keywordArray }
            ).then(res => {
                if (res.data) {
                    if (res.data.length > 0) {
                        this.setState({
                            verdictList: res.data,
                            //verdict: res.data[0],
                            keywordList: keywordArray,
                            keyword: search,
                            isOpenMsg: true,
                            msg: '查詢成功',
                        });
                    } else {
                        this.setState({
                            verdictList: [],
                            keywordList: [],
                            keyword: search,
                            isOpenMsg: true,
                            msg: '查無資料',
                        })
                    }
                } else {
                    this.setState({
                        verdictList: [],
                        keywordList: [],
                        keyword: search,
                        isOpenMsg: true,
                        msg: '查無資料',
                    })
                }
            }).catch((err) => {
                console.log(err);
                this.setState({
                    keyword: search,
                    keywordList: [],
                    isOpenMsg: true,
                    msg: '查詢失敗',
                })
            }).finally(() => {
                this.setState({
                    isAutoSearch: true,
                    verdictContentExpend: false,
                    resultAreaExpend: true,
                    Urlkeyword: null,
                    demoMode: false,
                })
            })
        }
    }

    recordUserInfo = () => {
        axios.post(`http://35.234.24.135:3300/mongo/UpsertUserInfo`,
            {
                userid: this.state.userid,
                from: "webSite",
                status: this.state.role === 0 ? 'custom' : 'lawyer'
            }
        ).then(() => {
            console.log('record user info success');
        }).catch((err) => {
            console.log(err);
        })
    }

    relativeSearchOnClick = (keyword) => {
        if (keyword === "離婚案例" || keyword === "離婚相關法條") {
            this.setState({
                verdictList: testVerdict,
                searchAreaExpend: false,
                resultAreaExpend: true,
                Urlkeyword: null,
                isOpenMsg: true,
                demoMode: true,
                keywordList: ["離婚", "案例"],
                msg: '查詢成功',
            });
        } else {
            if (keyword && keyword.length > 0) {
                axios.post('http://35.234.24.135:3300/wordcut/jieba',
                    { "paramword": keyword }).then(res => {
                        if (res.data) {
                            axios.post('http://35.234.24.135:3200/casigo/account/fizzytfidfread',
                                { "tfidf": res.data.result }
                            ).then(res2 => {
                                if (res2.data) {
                                    if (res2.data.length > 0) {
                                        this.setState({
                                            verdictList: res2.data,
                                            keywordList: res.data.result,
                                            demoMode: false,
                                            searchAreaExpend: false,
                                            resultAreaExpend: true,
                                            Urlkeyword: null,
                                            isOpenMsg: true,
                                            msg: '查詢成功',
                                        });
                                    } else {
                                        this.setState({
                                            verdictList: [],
                                            keywordList: [],
                                            demoMode: false,
                                            searchAreaExpend: false,
                                            resultAreaExpend: true,
                                            Urlkeyword: null,
                                            isOpenMsg: true,
                                            msg: '查無資料',
                                        })
                                    }
                                } else {
                                    this.setState({
                                        verdictList: [],
                                        keywordList: [],
                                        demoMode: false,
                                        searchAreaExpend: false,
                                        resultAreaExpend: true,
                                        Urlkeyword: null,
                                        isOpenMsg: true,
                                        msg: '查無資料',
                                    })
                                }
                            }).catch((err) => {
                                console.log(err);
                                this.setState({
                                    keywordList: [],
                                    demoMode: false,
                                    searchAreaExpend: false,
                                    resultAreaExpend: true,
                                    Urlkeyword: null,
                                    isOpenMsg: true,
                                    msg: '查詢失敗',
                                })
                            })
                        }
                    }).catch((err) => {
                        console.log(err);
                        this.setState({
                            keywordList: [],
                            demoMode: false,
                            searchAreaExpend: false,
                            resultAreaExpend: true,
                            Urlkeyword: null,
                            isOpenMsg: true,
                            msg: '查詢失敗',
                        })
                    })
            } else {
                this.setState({
                    demoMode: false,
                    searchAreaExpend: false,
                    resultAreaExpend: true,
                    Urlkeyword: null,
                    isOpenMsg: true,
                    msg: '請輸入相關詞彙或描述',
                })
            }
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
        if (this.state.userid && this.state.userid.trim().length !== 0) {
            this.recordUserInfo();
            this.setState({
                identityDialogOpen: false,
                searchAreaExpend: true,
                verdictContentExpend: false,
                resultAreaExpend: false,
                showSearchKeywordBtn: this.state.role === 0 ? true : false,
                showSearchVerdictBtn: this.state.role === 0 ? false : true,
                showKeywordList: false,
                keyword: '',
                keywordList: [],
                verdictList: [],
                isOpenMsg: true,
                msg: '登入成功'
            })
        } else {
            this.setState({
                isOpenMsg: true,
                msg: '請輸入使用者ID',
            })
        }
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
        this.setState({ role: event.target.value });
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
        if (this.state.demoMode) {
            this.setState({
                verdictList: testVerdict,
                searchAreaExpend: false,
                resultAreaExpend: true,
                isOpenMsg: true,
                msg: '查詢成功',
            });
        } else {
            if (this.state.keywordList && this.state.keywordList.length > 0) {
                axios.post('http://35.234.24.135:3200/casigo/account/fizzytfidfread',
                    { "tfidf": this.state.keywordList }
                ).then(res => {
                    if (res.data) {
                        if (res.data.length === 0) {
                            this.setState({
                                verdictList: [],
                                isOpenMsg: true,
                                msg: '查無資料',
                            })
                        } else {
                            this.setState({
                                searchAreaExpend: false,
                                resultAreaExpend: true,
                                verdictList: res.data,
                                isOpenMsg: true,
                                msg: '查詢成功'
                            })
                        }
                    } else {
                        this.setState({
                            verdictList: [],
                            isOpenMsg: true,
                            msg: '查無資料',
                        })
                    }
                }).catch((err) => {
                    console.log(err);
                    this.setState({
                        isOpenMsg: true,
                        msg: '查詢失敗',
                    })
                })
            } else {
                this.setState({
                    isOpenMsg: true,
                    msg: '請選擇一個以上相近關鍵字！',
                })
            }
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

    handleCloseMsg = () => {
        this.setState({ isOpenMsg: false })
    }

    highlightKeywords = (str) => {
        if (this.state.keywordList && this.state.keywordList.length > 0) {
            if (new RegExp(this.state.keywordList.join("|")).test(str)) {
                // At least one match
                let parts = str.split(new RegExp(`(${this.state.keywordList.join("|")})`, 'gi'));
                return <span> {parts.map((part, i) =>
                    <span key={i} style={this.state.keywordList.includes(part) ? { color: "red", fontWeight: 'bold' } : {}}>
                        {part}
                    </span>)
                } </span>;
            }
        }
        return <span>{str}</span>;
    }

    checkRole = () => {
        if (this.state.isAutoSearch) {
            return "匿名查詢";
        } else {
            return this.state.role === 0 ? '一般民眾' : '律師';
        }
    }

    render() {
        const { classes } = this.props;

        let indentityName = <div style={{ fontFamily: "Microsoft JhengHei" }}>
            <span>ID︰<strong>{this.state.isAutoSearch ? "匿名搜尋" : this.state.userid}</strong></span><br />
            <span>身分︰<strong>{this.checkRole()}</strong></span>
        </div>;

        let title = <h2 style={{ fontFamily: "Microsoft JhengHei" }}>莫訟法律諮詢</h2>;

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
            <b className={classes.topic}>種類：</b>{this.highlightKeywords(this.state.verdict.sys)}<br />
            <b className={classes.topic}>日期：</b>{new Date(this.state.verdict.date).toLocaleDateString()}<br />
            <b className={classes.topic}>文號：</b>{this.highlightKeywords(this.state.verdict.no)}<br />
            <b className={classes.topic}>主要內容：</b>{this.highlightKeywords(this.state.verdict.mainText)}<br /><br />
            <b className={classes.topic}>判決內容：</b>{this.highlightKeywords(this.state.verdict.judgement)}<br /><br />
            <b className={classes.topic}>法律見解：</b>{this.highlightKeywords(this.state.verdict.opinion)}<br /><br />
            <b className={classes.topic}>相關法條：</b>{this.state.verdict.relatedIssues.map((issue, idx) => {
                return <span key={idx}>{idx + 1}.{this.highlightKeywords(issue.lawName)}第{this.highlightKeywords(issue.issueRef.replace(" ", "之"))}條<br /></span>;
            })}
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
                            title={title}
                            subheader={indentityName}
                            onClick={this.handleIdentityDialogOpen}
                        />
                        <Collapse in={this.state.searchAreaExpend}>
                            <CardContent>
                                <div className={classes.root}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="search-keyword" className={classes.bootstrapFormLabel}>
                                            輸入關鍵字</InputLabel>
                                        <BootstrapInput name="keyword" id="search-keyword"
                                            value={this.state.keyword}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        {this.state.isLoading ? <CircularProgress /> : null}
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
                                                    {this.state.category.map(c => (
                                                        <MenuItem key={c} value={c}>
                                                            <Checkbox checked={this.state.keywordList.indexOf(c) > -1} />
                                                            <ListItemText primary={c} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                <FormHelperText>請選擇相關字詞</FormHelperText>
                                            </FormControl> : null}
                                    </FormControl>
                                </div>
                                {this.state.showSearchKeywordBtn ?
                                    <Button variant="contained" className={classes.margin} onClick={this.keywordSearchchOnClick}>
                                        搜尋關鍵字</Button> : null}
                                {this.state.showSearchVerdictBtn ?
                                    <Button variant="contained" color="primary" className={classes.margin} onClick={() => this.relativeSearchOnClick(this.state.keyword)}>
                                        搜尋相關判決書內容</Button> : null}
                                {this.state.showKeywordList === true ?
                                    <Button variant="contained" color="primary" className={classes.margin} onClick={() => this.searchBySelectOnClick()}>
                                        搜尋相關判決書內容</Button> : null}
                                <Button variant="contained" color="secondary" className={classes.margin} onClick={this.handleIdentityDialogClose}>
                                    重置查詢條件</Button>
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
                                {this.state.isAutoSearch ? null : <ExpandMoreIcon />}
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.resultAreaExpend}>
                            <List>
                                {this.state.verdictList.map((verdict, index) => {
                                    return ([
                                        <ListItem key={index} button>
                                            <ListItemText key={index} onClick={() => { this.handleVerdictContentOpen(verdict) }}>
                                                {new Date(verdict.date).toLocaleDateString()}，{verdict.no}，{verdict.summary === "" ? this.convertToShortText(verdict.mainText, 15)
                                                    : verdict.summary}
                                            </ListItemText>
                                        </ListItem>
                                    ]);
                                })}
                            </List>
                            <Dialog onClose={this.handleDialogClose}
                                aria-labelledby="customized-dialog-title"
                                open={this.state.dialogOpen}>
                                <DialogTitle id="customized-dialog-title" onClose={this.handleDialogClose}>
                                    <List>
                                        {this.state.demoMode ?
                                            <div>
                                                <ListItem>Yahoo
                                                    <List>
                                                        <ListItem component='a' key={0} target="_blank" href="https://tw.news.yahoo.com/%E9%A2%A8%E5%90%91%E6%96%B0%E8%81%9E%E5%85%A8%E6%B0%91%E9%96%8B%E8%AC%9B-%E5%85%88%E7%94%9F%E5%A4%96%E9%81%87%E8%A6%81%E9%9B%A2%E5%A9%9A-%E5%BE%8B%E5%B8%AB%E5%91%8A%E8%A8%B4%E5%A6%B3%E5%A6%82%E4%BD%95%E8%87%AA%E4%BF%9D-114747973.html">
                                                            【風向新聞全民開講】先生外遇要離婚？律師告訴妳如何自保</ListItem >
                                                    </List>
                                                </ListItem>
                                            </div> :
                                            <div>
                                                <ListItem>PTT
                                                    <List>{pttLinkList}</List>
                                                </ListItem>
                                                <ListItem>TVBS
                                                    <List>{tvbsLinkList}</List>
                                                </ListItem>
                                                <ListItem>ETTODAY
                                                    <List>{ettodayLinkList}</List>
                                                </ListItem>
                                            </div>}
                                    </List>
                                </DialogTitle>
                            </Dialog>
                            <Dialog
                                aria-labelledby="customized-dialog-title"
                                open={this.state.identityDialogOpen}>
                                <DialogTitle id="customized-dialog-title">
                                    <div>
                                        <FormControl>
                                            <TextField name="userid"
                                                label="輸入您的ID(最多12個字元)"
                                                style={{ width: 250 }}
                                                autoFocus={true}
                                                value={this.state.userid}
                                                onChange={this.handleInputChange}
                                                margin="normal" inputProps={{ maxLength: 12 }}
                                            />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl>
                                            {/* <InputLabel htmlFor="role-native-helper">身分</InputLabel> */}
                                            <Select className={classes.margin}
                                                value={this.state.role}
                                                onChange={this.handleSelectChange}
                                                input={<Input name="role" id="role-native-helper" />}
                                            >
                                                <MenuItem value={0}>一般民眾</MenuItem>
                                                <MenuItem value={1}>律師</MenuItem>
                                            </Select>
                                            <FormHelperText>請選擇您的身分</FormHelperText>
                                        </FormControl>
                                    </div>
                                    <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleIdentityDialogClose}>
                                        確認</Button>
                                </DialogTitle>
                            </Dialog>
                            {this.state.isAutoSearch ? null :
                                <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleVerdictListClose}>
                                    返回搜尋</Button>}
                        </Collapse>
                        <Collapse in={this.state.verdictContentExpend}>
                            {VerdictContent}
                            {this.state.verdictList.length > 0 ? <Button variant="contained" className={classes.margin} onClick={this.handleDialogOpen}>
                                相關社群文章</Button> : null}
                            <Button variant="contained" color="primary" className={classes.margin} onClick={this.handleVerdictContentClose}>
                                返回查詢結果</Button>
                        </Collapse>
                    </Card>
                    <Snackbar
                        open={this.state.isOpenMsg}
                        onClose={this.handleCloseMsg}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        duration={3000}
                        message={<span id="message-id">{this.state.msg}</span>}
                    />
                </Paper>
            </div>
        );
    }
}

SearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPage);
