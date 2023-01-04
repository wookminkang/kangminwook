import classNames from 'classnames';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'


export function Header() {
    return (
        <header className={style.header}>
            <h1>
                <Link to="/">
                    MW.Portfolio&nbsp;&nbsp;🙌

                </Link>
            </h1>
            <ul className={style.navi}>
                <li>
                    <Link to="about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="about">
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}