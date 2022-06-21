import Layout from "../components/layout"
import styles from "../styles/about.module.css"
import AnimationFadeIn from "../components/animationfadein"

export default function Page() {
    return (
        <section className="section">
            <div className={styles.aboutcontainer}>
                <AnimationFadeIn>
                    <div className={styles.marginbottom}>
                        <h1>About</h1>
                    </div>

                    <div>
                        <p className={styles.marginbottom}>I graduated magna cum laude with a B.B.A Management from the University of Georgia in May '22</p>
                        <p className={styles.marginbottom}>Now, I'm in the process of obtaining my Master’s of Business Administration (MBA) and my Master's of Social Work (MSW) at Kennesaw State University in Atlanta, GA</p>
                        <p className={styles.marginbottom}>I believe that the combination of education in organizational management and clinical social work will uniquely synergize to help me facilitate systemic change in mental healthcare.</p>
                        <p>I’m also working on a few notable projects, which you can check out in the projects section.</p>
                    </div>
                </AnimationFadeIn>
            </div>
        </section>
    )
}

Page.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}