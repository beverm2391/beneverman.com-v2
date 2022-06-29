import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";
import styles from '../../styles/featuredprojects.module.css';
import { useRouter } from 'next/router';
import Line from '../../components/line.js';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
        <section className="sectionpadded">
            <div className={styles.titlecontainer}>
                <h1 className={styles.fptitle}>Featured Projects</h1>
            </div>

            <div className={styles.projectswrapper}>
                {allProjectsData.map(({ id, title, desc, image, width, height }) => (
                    <>
                        <div style={{ height: '0px', width: '90%' }}>
                            <Line />
                        </div>
                        {/* generate link to project page */}
                        <Link href={`/projects/${id}`} passHref className="hoverlink">
                            <div className={styles.projectscontainer}>

                                <div className={styles.imageandtitle}>
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
                                {desc &&
                                    <div className={styles.description}>
                                        {desc && <p>{desc}</p>}
                                    </div>}
                            </div>
                        </Link>
                    </>
                )
                )}
                <Line />
            </div>

        </section>
    );
}

Page.getLayout = function getLayout(page) {
    return <Layout title="Projects">{page}</Layout>
}