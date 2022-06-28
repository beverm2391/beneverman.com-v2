import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/featuredprojects.module.css';
import { useRouter } from 'next/router';
import Line from '../../components/line.js';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

export default function Page({ allProjectsData }) {

    const router = useRouter();

    return (
        <Layout title="Projects">
            <section className="sectionpadded">
                <div className={styles.titlecontainer}>
                    <h1 className={styles.fptitle}>Featured Projects</h1>
                </div>

                <div className={styles.projectswrapper}>
                    {allProjectsData.map(({ id, title, desc, image, width, height }) => (
                        <>
                            <div style={{ height: '0px', width: '90%' }}>
                                <Line />
                            </div>
                            <Link href={`/projects/${id}`} passHref className="hoverlink">
                                <div className={styles.projectscontainer}>
                                    <h3>{title}</h3>
                                    {image &&
                                        <div className={styles.imagecontainer}>
                                            <Image src={image} alt={id} width={width} height={height}/>
                                        </div>
                                    }
                                    {desc && <p>{desc}</p>}

                                </div>
                            </Link>
                        </>
                    )
                    )}
                    <Line />
                </div>

            </section>
        </Layout>
    );
}