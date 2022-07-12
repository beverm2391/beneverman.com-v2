import styles from '../styles/navbarresponsive.module.css';
import Link from 'next/link';
import linkstyles from '../styles/linkunderline.module.css';
import classNames from 'classnames';
import { useState } from 'react';

const linksdata = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Projects", link: "/projects" },
    { id: 4, name: "Blog", link: "/blog" },
    { id: 5, name: "Contact", link: "/contact" },
]

export default function NavbarResponsive(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={`${styles.mobilenavtoggle} ${isOpen ? styles.toggleopen : styles.toggleclosed}`} onClick={() => setIsOpen(!isOpen)}></button>
            <nav className={styles.navbar}>
                {/* <div className={styles.logo}>Ben
                </div> */}
                <ul id="primarynavigaion" className={`${styles.primarynavigation} ${!isOpen ? styles.menuclosed : styles.menuopen}`}>
                    {linksdata && linksdata.map(({ id, name, link }) => {
                        return (
                            <li key={id}>
                                <Link href={link}>
                                    <a className={linkstyles.linkunderline} onClick={() => setIsOpen(!isOpen)}>{name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}