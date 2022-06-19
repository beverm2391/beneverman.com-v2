import Layout from '../../components/layout';
import styles from '../../styles/projects.module.css';
import Image from 'next/image';
import img_brain from '../../public/images/projects/brain.jpg';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router';

function Project() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <section>
                <div className={styles.ppgrid}>
                    <div className={styles.ppiconcontainer}>
                        <AiOutlineArrowLeft onClick={ () => router.back() } className={styles.ppicon} size={30}/>
                    </div>
                    <div className={styles.pptitlecontainer}>
                        <h1>{id}</h1>
                    </div>
                    <div className={styles.ppimagecontainer}>
                        <Image src={img_brain} alt="brain"/>
                    </div>
                </div>
                <div className={styles.ppwrapper}>
                    <p>body</p>
                </div>
            </section>
        </Layout>
    )
}

export default Project;