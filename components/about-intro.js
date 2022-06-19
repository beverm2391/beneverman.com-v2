import Layout from './layout'
import styles from '../styles/about-intro.module.css'

export default function  AboutIntro() {
    return (
        <section className="section">
            <div className="wrapper">
                <div className={styles.container}>
                    <div className={styles.container2}>
                        <div className={styles.containerleft}>
                            <h4 className={styles.opensans}>I'm a...</h4>
                        </div>
                        <div className={styles.containerleft}>
                            <h4 className={styles.opensans}>working towards...</h4>
                        </div>
                    </div>

                    <div className={styles.line}></div>

                    <div>
                        <div className={styles.containerright}>
                            <h4 className={styles.opensans}>social work student<br/>MBA student<br/>self-taught developer<br/></h4>
                        </div>
                        <div className={styles.containerright}>
                            <h4 className={styles.opensans}>making an impact in<br/>mental healthcare</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}