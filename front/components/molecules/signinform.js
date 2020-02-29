import React, {Component} from 'react'
import request from 'superagent'


export default class SignInForm extends Component {
    constructor (props) {
        super(props)
        this.state = { userid: '1',password: '1',jump: '', msg: '' }
    }

    api (command) {
        console.log(command)
        request
            .post('https://rails.local/api/' + command)
            .send({
                userid: this.state.userid,
                passwd: this.state.passwd
            })
            .end((err, res) => {
                console.log(err)
                console.log(res)
                alert('無接続')
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
                    <input value={this.state.userid}
                        onChange={e => changed('userid', e)} /><br />
                    <span>パスワード</span>
                    <input type='password' value={this.state.passwd}
                        onChange={e => changed('passwd' , e)} /><br />
                    <button onClick={e　=> this.api('login')}>ログイン</button><br />
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