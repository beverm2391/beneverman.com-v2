import styles from '../styles/projects.module.css';
import Image from 'next/image';
import img_brain from '../public/images/projects/brain.jpg';
import img_laptop from '../public/images/projects/laptop.jpg';

const projectsdata = [
    {id: 1, title: "GPT-3 Experiments", description: "", image: img_brain, link: "/projects/[]"},
    {id: 2, title: "www.beneverman.com", description: "", image: img_laptop, link: ""}
]

function ProjectLeft (title, image, description, link) {
    return (
        <div className={styles.projectscontainer}>
            <div className={styles.imagecontainer}>
            </div>
        </div>
    )
}


function ProjectRight () {
    return (
        <div></div>
    )
}

function FeaturedProjects() {
    return(
        <section>

            <div className={styles.projectswrapper}>
                <h1>Featured Projects</h1>
                <ProjectLeft/>
            </div>

        </section>
    )
}

export default FeaturedProjects;