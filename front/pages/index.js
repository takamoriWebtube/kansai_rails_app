import Nav from '../components/organisms/nav'
import LoginStatus from '../components/organisms/loginstatus'
import TalkRoom from '../components/organisms/talkroom'
//import css from "../styles.css"

export default () => (
    <div className="page">
        <Nav />
        <LoginStatus />
        <TalkRoom />
        <style jsx>{`
            .page {
                display: flex;
            }
        `}</style>
    </div>
    
)