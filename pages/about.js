import Layout from "../components/layout"
import styles from "../styles/about.module.css"
import Link from "next/link"
import BlackUnderline from "../components/animations/blackunderline"
import GradientUnderline from "../components/animations/gradientunderline"
import { FiArrowUpRight } from "react-icons/fi"
import linkstyles from '../styles/linkunderline.module.css';
import MyStory from "../components/mystory"
import Fade from "react-reveal/Fade"
import Scrollbg from "../components/scrollbg"

export default function Page() {
    return (
        <>
        <Scrollbg />
        <Fade duration={2000}>
        <section className="sectionpadded">
            <div className={styles.aboutcontainer}>
                    <div>
                        <h1>About</h1>
                    </div>
                    <div className={styles.abouttextcontainer}>
                        <p>I graduated <em>magna cum laude</em> with a <GradientUnderline>B.B.A in Management</GradientUnderline> from the University of Georgia in May 2022</p>
                        <p>Now, I&#39;m in the process of obtaining my <GradientUnderline>Master&#39;s of Business Administration</GradientUnderline> and my <GradientUnderline>Master&#39;s of Social Work</GradientUnderline> at Kennesaw State University in Atlanta, GA</p>
                        <p>I believe that the combination of education in organizational management and clinical social work will uniquely synergize to help me <GradientUnderline>facilitate systemic change in mental healthcare</GradientUnderline>.</p>
                        <p>I&#39;m a <GradientUnderline>self-taught developer</GradientUnderline> (Python/React/Next.js) and I&#39;m currently working on a few notable projects, which you can check out in the <Link href="/projects"><a className={linkstyles.linkunderline}>projects section<FiArrowUpRight class={styles.icon} size={16}/></a></Link>.</p>
                        <p>View my full resume <Link href="/files/Master_Resume_v7.2_fulllength.pdf" alt="resume"><a className={linkstyles.linkunderline}>here<FiArrowUpRight class={styles.icon} size={16}/></a></Link>.</p>
                    </div>
                    {/* <Image src={me} alt='Picture of me' className={styles.imageofme}/> */}
            </div>
        </section>
        </Fade>
        <Fade delay={500}>
            <MyStory />
        </Fade>
        </>
    )
}

Page.getLayout = function getLayout(page) {
    return <Layout title="About">{page}</Layout>
}