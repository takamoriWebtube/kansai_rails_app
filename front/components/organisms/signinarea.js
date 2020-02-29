import React, {Component} from 'react'
import SignInForm from '../molecules/signinform'

export default class SignInArea extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="Area SignInArea">
                <h1>ログイン</h1>
                <SignInForm />
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