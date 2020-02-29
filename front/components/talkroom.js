import { Component } from 'react';

export default class TalkRoom extends Component {

    render () {
        return(
            <div>
                <div className="talk_room">
                    <div className="room_name">
                        <p>チャットルーム</p>
                    </div>
                    <img src='/images/star.jpeg'/>
                    <div className="signin_mes">
                        <p>投稿するにはログインしてください</p>
                    </div>
                </div>
                <style jsx>{`
                    p {
                        padding: 0;
                        margin: 0;
                    }
                    .talk_room {
                        min-width: 880px;
                        width: calc(100vw - 280px);
                        height: 100%;
                        position: relative;
                    }
                    .talk_room img {
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        z-index: -1;
                    }
                    .room_name {
                        background-color: gray;
                        padding-left: 60px;
                    }
                    .room_name p {
                        padding-top: 20px;
                        padding-bottom: 20px;
                    }
                    .signin_mes{
                        z-index: 10;
                        background-color: #262F42;
                        opcaity: 0.3;
                        padding: 20px;
                    }
                    .signin_mes p {
                        color: white;
                    }
                `}</style>
            </div>
        )
    }
}