import styles from "../styles/footer.module.css"
import {BsTwitter, BsLinkedin, BsGithub} from "react-icons/bs"

export default function Footer() {
    const iconsize = 20
    const iconcolor = '#808080'
    return (
        <div className={styles.footer}>
            <div className={styles.copyrightcontainer}>
                <h5 style={{color: iconcolor}}>Ben Everman © 2022</h5>
            </div>
            <div className={styles.iconcontainer}>
                <a href=''><BsTwitter className="icon" size={iconsize} color={iconcolor} /></a>
                <a href=''><BsLinkedin className="icon" size={iconsize} color={iconcolor} /></a>
                <a href=''><BsGithub className="icon" size={iconsize} color={iconcolor} /></a>
            </div>
        </div>
    );
}
