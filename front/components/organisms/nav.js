import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (
    <nav className='nav'>
        <ul>
            <li>
                <Link href="/signin">
                    <span><FontAwesomeIcon icon={ faSignInAlt } /></span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <span><FontAwesomeIcon icon={ faHome } /></span>
                </Link>
            </li>
            <li>
                <Link href="/user">
                    <span><FontAwesomeIcon icon={ faUser } /></span>
                </Link>
            </li>
        </ul>
        <style jsx>{`
        nav {
            padding: 16px;
            background-color: #262F42;
            width: 64px;
            height: 100vh;
        }
        ul {
            liststyletype: none;
            margin: 0;
            padding: 0;
        }
        li {
            list-style: none;
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
        }
        span {
            width: 40px;
            height: 40px;
            background-color: #ECF0F4;
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        svg {
            background-color: #ECF0F4;
        }
        `}</style>
    </nav>
)

export default Nav