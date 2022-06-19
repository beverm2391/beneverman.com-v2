import styles from '../styles/navbar.module.css';
import Link from 'next/link';

const linksdata = [
    {id: 1, name: "Home", link: "/"},
    {id: 2, name: "About", link: "/about"},
    {id: 3, name: "Projects", link: "/projects"},
    {id: 4, name: "Contact", link: "/contact"},
]

export default function Navbar() {
    return( 
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            </div>
            <ul>
                {linksdata && linksdata.map(({ id, name, link }) => {
                    return ( 
                        <li key={id}>
                            <Link href={link}>
                                <a>{name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}