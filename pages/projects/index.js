import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/featuredprojects.module.css';
import { useRouter } from 'next/router';
import Line from '../../components/line.js';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { BsArrowBarRight, BsArrowReturnRight, BsArrowRight } from "react-icons/bs";

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

export default function Page({ allProjectsData }) {

    const router = useRouter();;
    return (
        <section className="sectionpadded">
            <Fade delay={200}>
                <div className={styles.titlecontainer}>
                    <h1 className={styles.fptitle}>Featured Projects</h1>
                </div>
            </Fade>
            <div className={styles.projectswrapper}>
                {allProjectsData.map(({ id, title, desc, image, width, height }) => (
                    <>
                        {/* generate link to project page */}
                        <Fade delay={200}>
                            <div style={{ height: '1.5px', width: '100%', opacity: .5 }}>
                                <Line />
                            </div>
                        </Fade>
                        <Link href={`/projects/${id}`} passHref className="hoverlink">
                            <div className={styles.projectscontainer}>
                                <Fade delay={500}>
                                    <div className={image ? `${styles.imageandtitle}` : `${styles.justtitle}`}>
                                        {/* If theres an image, format with the title card, otherwise, format normal */}
                                        {image &&
                                            <div className={styles.imagecontainer}>
                                                <Image src={image} alt={id} width={width} height={height} />
                                            </div>
                                        }
                                        {/* Pick the class depending on if theres an image or not */}
                                        <div className={image ? `${styles.titlecard}` : `${styles.titlecardrelative}`}>
                                            <h3 className={styles.projecttitle}>{title}</h3>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade>
                                    {desc &&
                                        <div className={image ? styles.descriptionimage : styles.description}>
                                            <p>{desc}</p>
                                        </div>}
                                </Fade>
                            </div>
                        </Link>
                    </>
                )
                )}
                <Line />
            </div>

        </section >
    );
}

Page.getLayout = function getLayout(page) {
    return <Layout title="Projects">{page}</Layout>
}