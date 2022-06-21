import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout.js";
import Link from "next/link";
import Date from "../../components/date.js";
import styles from "../../styles/blog.module.css";
import Image from "next/image";
import profilepic from "../../public/images/profilepic.jpg";
import Line from "../../components/line.js";
import AnimationFadeIn from "../../components/animationfadein";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Page({ allPostsData }) {
    return (

        <Layout title="Blog">
            <AnimationFadeIn>
                <section>
                    <div className={styles.bloggrid}>

                        <div className={styles.article}>
                            <div className={styles.blogtitlecontainer}>
                                <h1 className={styles.blogtitle}>Blog</h1>
                            </div>
                            <Line />
                            {allPostsData.map(({ id, title, date, image }) => (
                                <div key={id}>
                                    <Link href={`/blog/${id}`}>
                                        <div className={styles.articlecard}>
                                            <div className={styles.articlesubcard}>
                                                <h4 className={styles.articlecardtitle}>{title}</h4>
                                                <br />
                                                <small>
                                                    <Date dateString={date} />
                                                </small>
                                            </div>
                                            <div className={styles.articlecardimage}>
                                                {image && <Image src={image} alt="Ben Everman" height={100} width={100} />}
                                            </div>
                                        </div>
                                    </Link>
                                    <Line />
                                </div>
                            ))}

                        </div>
                        <div className={styles.sidebar}>
                            <Link href="/about">
                                <div className={styles.aboutcard}>
                                    <Image src={profilepic} className={styles.circleframe} alt="Ben Everman" height={100} width={100} />
                                    <h4 className={styles.author}>Ben Everman</h4>
                                    <p>Social Work Student | MBA Student | Developer</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimationFadeIn>
        </Layout>
    );
}
