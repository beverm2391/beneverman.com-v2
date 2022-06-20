import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/projects.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router';

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
                <div className={styles.ppgrid}>
                    <div className={styles.ppiconcontainer}>
                        <AiOutlineArrowLeft onClick={ () => router.back() } className={styles.ppicon} size={30}/>
                    </div>

                    <div className={styles.pptitlecontainer}>
                        <h1>Projects</h1>
                    </div>
                    
                    <div className={styles.ppimagecontainer}>

                    </div>
                </div>

                <div className={styles.ppwrapper}>
                    <ul>
                        {allProjectsData.map(({ id, title, date, image }) => (
                            <li key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
                                <br/>   
                                {image}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
}
