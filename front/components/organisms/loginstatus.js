import React, {Component} from 'react'

export default class LoginStatus extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="login-status">
                <div className="login-status__header">
                    <p>ユーザーとログイン状況</p>
                </div>
                <ul className="login-status__body">
                    <li className="login-status__body__item">
                        <div className="login-status__body__item__image">
                            <img src='/images/star.jpeg' />
                        </div>
                        <div className="login-status__body__item__name">名前</div>
                        <div className="login-status__body__item__status">
                            <span></span>
                        </div>
                    </li>
                    <li className="login-status__body__item">
                        <div className="login-status__body__item__image">
                            <img src='/images/star.jpeg' />
                        </div>
                        <div className="login-status__body__item__name">名前</div>
                        <div className="login-status__body__item__status">
                            <span></span>
                        </div>
                    </li>
                </ul>
                <style jsx>{`
                .login-status {
                    width: 280px;
                }
                .login-status__header {
                    padding: 20px;
                    text-align: center;
                    border-bottom: 1px solid #ccc;
                }
                .login-status__body {
                    padding: 20px;
                }
                .login-status__body__item {
                    display: flex;
                    margin-bottom: 20px;
                }
                .login-status__body__item__image {
                    width: 40px;
                    height: 40px;
                    padding-right: 10px;
                }
                .login-status__body__item__image img {
                    width: 100%;
                    height: 100%;
                    obect-fit: cover;
                    border-radius: 100px;
                }
                .login-status__body__item__name {
                    display: flex;
                    align-items: center;
                    width: 170px;
                }
                .login-status__body__item__status {
                    width: 20px;
                    display: flex;
                    align-items: center;
                }
                .login-status__body__item__status span {
                    display: block;
                    border: 1px solid #ccc;
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                    color: green;
                }
                `}</style>
            </div>
        )
    }
}

