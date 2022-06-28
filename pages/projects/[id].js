import Layout from '../../components/layout.js';
import { getAllProjectIds, getProjectData } from '../../lib/projects.js';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../styles/projectpage.module.css';
import Image from 'next/image';

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
        <Layout title={projectData.title}>
            <section className="sectionpadded">
                <div className={styles.ppwrapper}>
                    <div className={styles.ppcontainer}>

                        <div className={styles.pptitlecontainer}>
                            <h1 className={styles.pptitle}>{projectData.title}</h1>
                            <div className={styles.ppiconcontainer}>
                                <AiOutlineArrowLeft onClick={() => router.back()} className={styles.ppicon} size={30} />
                            </div>
                        </div>
                        {projectData.image ?
                            <div className={styles.ppimagecontainer}>
                                <Image src={projectData.image} alt={projectData.id} width={projectData.width} height={projectData.height} />
                            </div> :
                            <div className={styles.spacer}></div>
                        }
                        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
