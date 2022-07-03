import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/projects2.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Parallax from 'react-rellax';
import Scroll from "../../components/scroll.js"
import { useEffect } from "react";

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

function backgroundclass() {

    const scrollmaxheight = Scroll()[1]
    const scrollheight = (Scroll()[0])
    // + .5*(window.innerHeight)

    // this is the scroll position, so the top of the page
    const breakpoint1 = 400;

    if (scrollheight > breakpoint1)
        return [styles.bg1, styles.objectcontainerafter]
    else
        // I had to give it a default height because the variable was not being set until the user scrolled, so it would be a height of 0 initially
        return [`${styles.default} + ${styles.defaultheight}`, styles.objectcontainerbefore]
}

export default function Page({ allProjectsData }) {

    const scrollmaxheight = Scroll()[1]
    const router = useRouter();;

    return (
        <section className="sectionpadded">
            {/* scroll background */}
            <div className={backgroundclass()[0]} style={{ height: scrollmaxheight }} />

            <div className={styles.projectswrapper}>

            {/* <div className={styles.blackfilter} style={{ height: scrollmaxheight }}/>

            <div className={backgroundclass()[1]} style={{ height: scrollmaxheight }}>
                <Parallax speed={-4}>
                    <div className={styles.object1} />
                </Parallax>
                <Parallax speed={-20}>
                    <div className={styles.object2} />
                </Parallax>
                <Parallax speed={10}>
                    <div className={styles.object3} />
                </Parallax>
                <div className={styles.object4} />
            </div> */}

                <Fade delay={200}>
                    <div className={styles.titlecontainer}>
                        <h1 className={styles.fptitle}>Featured Projects</h1>
                    </div>
                </Fade>


                {allProjectsData.map(({ id, title, desc, image, width, height }) => (
                    <>
                        <Link href={`/projects/${id}`} passHref className="hoverlink">
                            <div className={styles.projectscontainer}>
                                <div className={styles.card}>
                                    <div>
                                        <h2 className={styles.projecttitle}>{title}</h2>
                                        <h5>Artifical Intelligence, Natural Language Processing</h5>
                                        {desc &&
                                            <div className={image ? styles.descriptionimage : styles.description}>
                                                <p>{desc}</p>
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                )
                )}
            </div>
        </section >
    );
}

Page.getLayout = function getLayout(page) {
    return <Layout title="Projects">{page}</Layout>
}