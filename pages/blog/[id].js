import Layout from '../../components/layout.js';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date.js';
import styles from '../../styles/blog.module.css';
import Image from 'next/image';
import profilepic from '../../public/images/profilepic.jpg';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';
import navbarstyles from '../../styles/navbarresponsive.module.css';
import footerstyles from '../../styles/footer.module.css';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            postData,
            allPostsData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    };
}

export default function Post({ postData, allPostsData }) {

    // filter out the current post from the list of all posts
    const allPostsDataExcept = allPostsData.filter(allPostsData => allPostsData.id != postData.id)
    const router = useRouter();
    return (
        <Layout background='backgroundlm' navbarclass={navbarstyles.navbarblack} footerclass={footerstyles.footer}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Fade delay={200}>
                <section className="sectionpadded">

                    <div className={styles.blogpagegrid}>
                        <div className={styles.blogiconcontainer}>
                            <AiOutlineArrowLeft onClick={() => router.back()} className={styles.ppicon} size={30} />
                        </div>
                        <div className={styles.article}>

                            {/* title */}
                            <div className={styles.articletitlecontainer}>
                                <h1 className={styles.articletitle}>{postData.title}</h1>
                                {/* <div>
                                    {postData.id}
                                    <br />
                                    <Date dateString={postData.date} />
                                </div> */}
                            </div>

                            {/* image */}
                            {allPostsData.image ?
                                <div className={styles.articleimagecontainer}>
                                    <Image src={allPostsData.image} alt={allPostsData.id} width={allPostsData.width} height={allPostsData.height} layout={"responsive"} />
                                </div> :
                                <div className={styles.spacer}></div>
                            }

                            {/* article contert */}
                            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                            <hr></hr>

                            <div className={styles.endingblock}>
                                <div className={styles.ebtextcontainer}>
                                    <h4>Ben Everman</h4>
                                    <p>Social Work Student | MBA Student | Developer</p>
                                </div>
                                {/* <div className={styles.ebimagecontainer}>
                                    <Image src={profilepic} className={styles.circleframe} alt="Ben Everman" height={100} width={100} />
                                </div> */}
                            </div>
                        </div>

                        <div className={styles.sidebar}>

                            <Link href="/about">
                                <div className={styles.aboutcard}>
                                    <Image src={profilepic} className={styles.circleframe} alt="Ben Everman" height={100} width={100} />
                                    <h4 className={styles.author}>Ben Everman</h4>
                                    <p>Social Work Student | MBA Student | Developer</p>
                                </div>
                            </Link>

                            <h4>More From Me</h4>

                            <div className={styles.morearticles}>
                                {allPostsDataExcept.map(({ id, title }) => (
                                    <Link href={`/blog/${id}`} key={id}>
                                        <div className={styles.sidebararticlecard}>
                                            <a>{title}</a>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                </section>
            </Fade>
        </Layout>
    );
}

