import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout.js";
import Link from "next/link";
import Date from "../../components/date.js";
import styles from "../../styles/blog.module.css";
import Image from "next/image";
import profilepic from "../../public/images/profilepic.jpg";
import Line from "../../components/line.js";
import Fade from "react-reveal/Fade";
import navbarstyles from "../../styles/navbarresponsive.module.css";
import footerstyles from "../../styles/footer.module.css";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Page({ allPostsData }) {

    function filterPublished(props) {
        return props.filter( post =>  post.date)
    }

    // Create a new array with all projects that have a "date"
    const allPostsDataPublished = filterPublished(allPostsData);

    return (

        <Layout title="Blog" background="backgroundlm" navbarclass={navbarstyles.navbarblack} footerclass={footerstyles.footer}>
            <Fade delay={200}>
                <section className="sectionpadded">
                    <div className={styles.blogwrapper}>

                        <div className={styles.article}>
                            <div className={styles.blogtitlecontainer}>
                                <h1 className={styles.blogtitle}>Blog</h1>
                            </div>
                            <Line />
                            {allPostsDataPublished.map(({ id, title, date, image, desc }) => (
                                <div key={id}>
                                    <Link href={`/blog/${id}`}>
                                        <div className={styles.articlecard} styles={{minHeight: '200px'}}>
                                            <div className={styles.articlesubcard}>
                                                <h4 className={styles.articlecardtitle}>{title}</h4>
                                                <br />
                                                <small>
                                                    <Date dateString={date} />
                                                </small>
                                                <p>{desc}</p>
                                            </div>
                                            {/* IF I WANT AN IMAGE USE CODE BELOW */}
                                            {/* <div className={styles.articlecardimage}>
                                                {image && <Image src={image} alt="Ben Everman" height={100} width={100} />}
                                            </div> */}
                                        </div>
                                    </Link>
                                    <Line />
                                </div>
                            ))}

                        </div>
                        {/* <div className={styles.sidebar}>
                            <Link href="/about">
                                <div className={styles.aboutcard}>
                                    <Image src={profilepic} className={styles.circleframe} alt="Ben Everman" height={100} width={100} />
                                    <h4 className={styles.author}>Ben Everman</h4>
                                    <p>Social Work Student | MBA Student | Developer</p>
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </section>
            </Fade>
        </Layout>
    );
}
