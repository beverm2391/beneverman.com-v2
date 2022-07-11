import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/projects3.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Scroll from "../../components/scroll.js"
import { useRef } from "react";

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

// function Backgroundclass() {

//     const scrollmaxheight = Scroll()[1]
//     const scrollheight = (Scroll()[0])
//     const viewportheight = (Scroll()[2])
//     // + .5*(window.innerHeight)

//     // this is the scroll position, so the top of the page
//     const breakpoint1 = 800;
//     const breakpoint2 = 2000;
//     const breakpoint3 = 3000;

//     if (scrollheight >= breakpoint1 && scrollheight < breakpoint2)
//         return [styles.bg1, styles.objectcontainerafter]
//     else if (scrollheight >= breakpoint2 && scrollheight < breakpoint3)
//         return [styles.bg2, styles.objectcontainerafter]
//     else if (scrollheight > breakpoint3)
//         return [styles.bg3, styles.objectcontainerafter]
//     else
//         // I had to give it a default height because the variable was not being set until the user scrolled, so it would be a height of 0 initially
//         return [`${styles.default} + ${styles.defaultheight}`, styles.objectcontainerbefore]
// }

export default function Page({ allProjectsData }) {

    const scrollmaxheight = Scroll()[1]
    const router = useRouter();;

    return (
        <section className="sectionpadded">
            {/* scroll background */}
            {/* <div className={Backgroundclass()[0]} style={{ height: scrollmaxheight }} /> */}

            <div className={styles.projectswrapper}>

                <Fade delay={200}>
                    <div className={styles.titlecontainer}>
                        <h1 className={styles.fptitle}>Featured Projects</h1>
                    </div>
                </Fade>

                {allProjectsData.map(({ id, title, desc, image, width, height }) => (
                    <>
                        <Link href={`/projects/${id}`} passHref className="hoverlink">
                            <div className={styles.projectscontainer}>
                                <div className={styles.cardwrapper}>
                                    <div className={styles.card}>
                                        <div>
                                            <h2 className={styles.projecttitle}>{title}</h2>
                                            <h5>Artifical Intelligence, Natural Language Processing</h5>
                                            {desc && <p>{desc}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                )
                )}

                <div className={styles.previewcontainer}>
                    <p>Some text alskdjhfa olka sdlkj  alksdj liahdbla flksajbf lakjsbd lafks</p>
                </div>

            </div>
        </section >
    );
}

Page.getLayout = function getLayout(page) {
    return <Layout title="Projects" background="uigradient1">{page}</Layout>
}