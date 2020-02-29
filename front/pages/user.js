import React, {Component} from 'react'
import Nav from '../components/organisms/nav'


export default class User extends Component {

    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className='user'>
                <Nav />
                <h1>ユーザー</h1>
                <style jsx>{`
                    div {
                        display: flex;
                    }
                `}</style>
            </div>
            
        )
    }
}