import React, {Component} from 'react'
import Router from 'next/router'
import request from 'superagent'


export default class SignUpForm extends Component {
    constructor (props) {
        super(props)
        this.state = { email: '1',password: '1',username: '1',jump: '', msg: '' }
    }

    api (command) {
        request
            .post('https://rails.local/api/' + command)
            .send({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            })
            .end((err, res) => {
                
                //console.log(res.statusCode)
                
                if (err) {
                    console.log(err.response.text)
                    this.setState({msg: err.response.text})
                    return
                }

                localStorage.setItem('token', res.text)
                let token = localStorage.getItem('token');
                console.log(token)
                Router.push('/');
                /*
                if (err) return
                const r = res.body
                console.log(r)
                if (r.status && r.token) {
                    alert('接続')
                    window.localStorage['sns_id'] = this.state.userid
                    window.localStorage['sns_auth_token'] = r.token
                    this.setState({Jump: '/'})
                    return
                }
                this.setState({msg: r.msg})
                */
            })
    }
    render () {
        if(this.state.jump) {
            return <Redirect to={this.state.jump} />
        }
        const changed = (name, e) => this.setState({[name]: e.target.value})
        return (
            <div>
                <div>
                    <span>メールアドレス:</span>
                    <input type="email" value={this.state.email}
                        onChange={e => changed('email', e)} /><br />
                    <span>パスワード</span>
                    <input type='password' value={this.state.password}
                        onChange={e => changed('password' , e)} /><br />
                    <span>ユーザーネーム</span>
                    <input value={this.state.username}
                        onChange={e => changed('username' , e)} /><br />
                    <button onClick={e　=> this.api('signup')}>登録</button><br />
                    <p>{this.state.msg}</p>
                </div>
                <style jsx>{`
                    span {
                        display: block;
                    }
                    input {
                        width: 100%;
                        height: 32px;
                        margin-bottom: 40px;
                    }
                    button {
                        display: block;
                        width: 60px;
                        height: 32px;
                        margin-left: auto;
                    }
                `}</style>
            </div>
        )
    }
}