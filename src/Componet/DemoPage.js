import React from 'react';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../MosongLogo.png'
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ReactPlayer from 'react-player'

const title = <h2 style={{ fontFamily: "Microsoft JhengHei" }}>莫訟法律諮詢</h2>;
const indentityName = <div style={{ fontFamily: "Microsoft JhengHei" }}>
    <span>ID︰<strong>測試ID</strong></span><br />
    <span>身分︰<strong>測試身分</strong></span>
</div>;
class DemoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Paper elevation={1}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar src={Logo} aria-label="Recipe" />
                            }
                            title={title}
                            subheader={indentityName}
                        />
                        <Collapse in={true}>
                            <CardContent>
                                <h2>網頁改版中！如有需要聯繫請<a href="https://qrco.de/bbErbu">點我</a></h2>
                                <h3>網頁版Demo影片：</h3>
                                <ReactPlayer url='https://www.youtube.com/watch?v=YbDiDD9S0vQ'
                                    playing={false}
                                    volume={0.8}
                                    width="800px"
                                    heght="450px"
                                />
                                <h3>Line聊天機器人Demo影片：</h3>
                                <ReactPlayer url='https://www.youtube.com/watch?v=Iamsw0boKmI'
                                    playing={false}
                                    volume={0.8}
                                    width="800px"
                                    heght="450px"
                                />
                            </CardContent>
                        </Collapse>
                    </Card>
                </Paper>
            </div>
        );
    }
}

export default DemoPage;