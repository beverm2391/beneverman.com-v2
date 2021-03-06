import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import linkstyles from '../styles/linkunderline.module.css';

const linksdata = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Projects", link: "/projects" },
    { id: 4, name: "Blog", link: "/blog" },
    { id: 5, name: "Contact", link: "/contact" },
]

export default function Navbar(props) {
    return (
        <>
            <nav className={styles.navbar}>
                {/* <div className={styles.logo}>
                </div> */}
                <ul>
                    {linksdata && linksdata.map(({ id, name, link }) => {
                        return (
                            <li key={id}>
                                <Link href={link}>
                                    <a className={linkstyles.linkunderline}>{name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}