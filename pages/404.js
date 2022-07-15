import Layout from "../components/layout"
import styles from "../styles/contact.module.css"
import linkstyles from "../styles/linkunderline.module.css"
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"
import Fade from "react-reveal/Fade"
import footerstyles from "../styles/footer.module.css"
import navbarstyles from "../styles/navbarresponsive.module.css"

export default function Page() {
    return (
        <Layout title="404" footerclass={footerstyles.footer} background="backgroundlm" navbarclass={navbarstyles.navbarblack}>
            <Fade delay={200}>
                <section className="section">
                    <div className="wrapper">
                        <div className={styles.contactcontainer}>
                            <h2 className={styles.errortitle}>404: Page Doesn&#39;t Exist</h2>
                        </div>
                    </div>
                </section>
            </Fade>
        </Layout>
    )
}