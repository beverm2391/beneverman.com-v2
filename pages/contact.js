import Layout from "../components/layout"
import styles from "../styles/contact.module.css"
import linkstyles from "../styles/linkunderline.module.css"
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"
import Fade from "react-reveal/Fade"
import footerstyles from "../styles/footer.module.css"

export default function Page() {
    return (
        <Layout title="Contact" footerclass={footerstyles.footerblack}>
            <Fade delay={200}>
                <section className="section">
                    <div className="wrapper">
                        <div className={styles.contactcontainer}>
                            <h2 className={styles.contacttitle}>Interested in working together? Don&#39;t hesitate to reach out.</h2>
                            <a href="mailto:contact@beneverman.com"><h4 className={linkstyles.linkunderline}>contact@beneverman.com</h4></a>
                            <div className={styles.iconcontainer}>
                                <a href=''><BsTwitter className="icon" size={30}/></a>
                                <a href=''><BsLinkedin className="icon" size={30}/></a>
                                <a href=''><BsGithub className="icon" size={30}/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </Layout>
    )
}