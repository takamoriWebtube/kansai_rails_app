import Nav from '../components/organisms/nav'
import LoginStatus from '../components/organisms/loginstatus'
//import css from "../styles.css"

export default () => (
    <div className="page">
        <Nav />
        <LoginStatus />
        <div>
            <h1>Topo</h1>
        </div>
        <style jsx>{`
            .page {
                display: flex;
            }
        `}</style>
    </div>
    
)