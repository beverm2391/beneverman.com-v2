import Layout from '../../components/layout.js';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../styles/pp.module.css';
import Head from 'next/head';

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false
    };
}

export default function Project({ projectData }) {
    const router = useRouter();
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <section>
                <div className={styles.ppgrid}>
                    <div className={styles.ppiconcontainer}>
                        <AiOutlineArrowLeft onClick={ () => router.back() } className={styles.ppicon} size={30}/>
                    </div>
                    <div className={styles.pptitlecontainer}>
                        <h1>{projectData.title}</h1>
                    </div>
                    <div className={styles.ppimagecontainer}>
                    </div>
                </div>
                <div className={styles.ppwrapper}>
                    <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                </div>
            </section>
        </Layout>
    )
}
