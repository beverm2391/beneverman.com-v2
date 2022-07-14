import Layout from "../components/layout"
import styles from "../styles/hero2.module.css"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import avatar from "../public/images/avatar.png"

export default function Page() {
    return (
        <Layout title="Contact">
            <Fade delay={200}>
                <section className="section">
                        <div className={styles.container}>
                            <div className={styles.textcontainer}>
                                <h2 className={styles.gradienttext}>My name is:</h2>
                                <h1 className={styles.title}>Ben Everman</h1>
                                <h2 className={styles.gradienttext}>I'm a:</h2>
                                <h2 className={styles.subheading}>Social Work Student</h2>
                                <h2 className={styles.subheading}>MBA Student</h2>
                                <h2 className={styles.subheading}>Developer</h2>
                            </div>
                            <div className={styles.imagecontainer}>
                                <Image src={avatar} alt="Me" layout="responsive"/>
                            </div>
                        </div>
                </section>
            </Fade>
        </Layout>
    )
}