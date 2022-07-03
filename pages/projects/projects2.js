import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/projects2.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Parallax from 'react-rellax';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

export default function Page({ allProjectsData }) {

    const router = useRouter();;
    return (
        <section className="sectionpadded">
            <Fade delay={200}>
                <div className={styles.titlecontainer}>
                    <h1 className={styles.fptitle}>Featured Projects</h1>
                </div>
            </Fade>
            <div className={styles.projectswrapper}>

                <Parallax speed={-4}>
                    <div className={styles.object1} />
                </Parallax>
                <Parallax speed={-1}>
                    <div className={styles.object2} />
                </Parallax>
                <Parallax speed={-1}>
                    <div className={styles.object3} />
                </Parallax>
                <Parallax speed={-20}>
                    <div className={styles.object4} />
                </Parallax>
                <Parallax speed={-2}>
                    <div className={styles.object5} />
                </Parallax>


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