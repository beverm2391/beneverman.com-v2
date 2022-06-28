import styles from '../styles/buttons.module.css'

const links = ['/about', '/projects', '/blog']
const randomlink = links[Math.floor(Math.random() * links.length)]


export default function ExploreButton() {
    return (
        <button className={styles.explorebutton}>
            <a href={randomlink}>
                Explore !
            </a>
        </button>
    )
}