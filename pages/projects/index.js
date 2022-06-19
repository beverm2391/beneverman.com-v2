import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/projects.module.css';
import Image from 'next/image';
import img_brain from '../../public/images/projects/brain.jpg';
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
                        <Image src={img_brain} alt="brain"/>
                </div>
            </div>
            <div className={styles.ppwrapper}>
                <ul>
                    {allProjectsData.map(({ id, title, date }) => (
                        <li key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </Layout>
    );
}
