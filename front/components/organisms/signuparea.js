import React, {Component} from 'react'
import SignUpForm from '../molecules/signupform'

export default class SignUpArea extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="Area SignInArea">
                <h1>新規アカウント作成</h1>
                <SignUpForm />
                <style jsx>{`
                    .SignInArea {
                        background-color: #262F42;
                        color: #fff;
                        padding: 30px;
                        width: 30%;
                    }
                `}</style>
            </div>
        )
    }
}