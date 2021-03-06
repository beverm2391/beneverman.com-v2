import Layout from "../components/layout"
import styles from "../styles/about.module.css"
import Link from "next/link"
import GradientUnderline from "../components/animations/gradientunderline"
import { FiArrowUpRight } from "react-icons/fi"
import linkstyles from '../styles/linkunderline.module.css';
import MyStory from "../components/mystory"
import Fade from "react-reveal/Fade"
import Scroll from "../components/scroll"
import footerstyles from "../styles/footer.module.css"

function backgroundclass() {

    const scrollmaxheight = Scroll()[1]
    const scrollheight = (Scroll()[0])
    // + .5*(window.innerHeight)

    // this is the scroll position, so the top of the page
    const breakpoint1 = 600;

    if (scrollheight > breakpoint1)
        return styles.bg1
    else
        // I had to give it a default height because the variable was not being set until the user scrolled, so it would be a height of 0 initially
        return styles.default
}

function hideAbout() {

    const scrollmaxheight = Scroll()[1]
    const scrollheight = (Scroll()[0])

    const breakpoint1 = 600;

    if (scrollheight > breakpoint1)
        return `${styles.abouttextcontainer} + ${styles.invisible}`
    else
        return styles.abouttextcontainer
}


export default function Page() {

    var scrollmaxheight = Scroll()[1]
    return (
        <>
            <div className={backgroundclass()} style={{ height: scrollmaxheight }} />
            <Fade duration={2000}>
                <section className="sectionpadded">
                    <div className={styles.aboutcontainer}>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div className={hideAbout()}>
                            <p>I graduated <em>magna cum laude</em> with a <GradientUnderline>B.B.A in Management</GradientUnderline> from the University of Georgia in May 2022</p>
                            <p>Now, I&#39;m in the process of obtaining my <GradientUnderline>Master&#39;s of Business Administration</GradientUnderline> and my <GradientUnderline>Master&#39;s of Social Work</GradientUnderline> at Kennesaw State University in Atlanta, GA</p>
                            <p>I believe that the combination of education in organizational management and clinical social work will uniquely synergize to help me <GradientUnderline>facilitate systemic change in mental healthcare</GradientUnderline>.</p>
                            <p>I&#39;m a <GradientUnderline>self-taught developer</GradientUnderline> (Python/React/Next.js) and I&#39;m currently working on a few notable projects, which you can check out in the <Link href="/projects"><a className={linkstyles.linkunderline}>projects section<FiArrowUpRight class={styles.icon} size={16} /></a></Link>.</p>
                            <p>View my full resume <Link href="/files/Master_Resume_v7.2_fulllength.pdf" alt="resume"><a className={linkstyles.linkunderline}>here<FiArrowUpRight class={styles.icon} size={16} /></a></Link>.</p>
                        </div>
                        {/* <Image src={me} alt='Picture of me' className={styles.imageofme}/> */}
                    </div>
                </section>
            </Fade>

            <MyStory />
        </>
    )
}

Page.getLayout = function getLayout(page) {
    return <Layout title="About" footerclass={footerstyles.footer}>{page}</Layout>
}