import styles from '../styles/navbar.module.css';

const links = [
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
                {links && links.map(({ id, name, link }) => {
                    return ( 
                        <li key={id}>
                            <a href={link}>{name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}