import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/featuredprojects.module.css';
import { useRouter } from 'next/router';
import Line from '../../components/line.js';
import Link from 'next/link';

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
            <section>
                <div className={styles.titlecontainer}>
                    <h1 className={styles.fptitle}>Featured Projects</h1>
                </div>

                <div className={styles.projectswrapper}>
                    {allProjectsData.map(({id, title, desc }) => (
                            <>
                                <Line/>
                                <div>
                                    <Link href={`/projects/${id}`}>
                                        <a>
                                            <h3>{title}</h3>
                                        </a>
                                    </Link>

                                    <p>{desc}</p>
                                </div>
                            </> 
                        ))}
                <Line/>
                </div>
                
            </section>
        </Layout>
    );
}
