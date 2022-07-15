import Layout from "../components/layout"
import styles from "../styles/hero3.module.css"
import Fade from "react-reveal/Fade"
import ScrollRoute from "../components/scrollroute.js"

// write a sentence

export default function Page() {
    
    ScrollRoute('/about')

    return (
        <Layout title="Homepage" hidenavbar={true}>
            <Fade delay={200}>
                <section className="section">
                    <div className={styles.container}>
                        <div className={styles.textcontainer}>
                            <h2 className={styles.gradienttext}>My name is:</h2>
                            <h1 className={styles.title}>Ben Everman</h1>
                            <h2 className={styles.gradienttext}>I&#39;m a:</h2>
                            <h2 className={styles.subheading}>Social Work Student</h2>
                            <h2 className={styles.subheading}>MBA Student</h2>
                            <h2 className={styles.subheading}>Developer</h2>
                        </div>
                    </div>
                    {/* <div className={styles.pageextender}/> */}
                </section>
            </Fade>
        </Layout>
    )
}