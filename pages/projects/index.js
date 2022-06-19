import { getSortedProjectsData } from "../../lib/projects";
import Layout from "../../components/layout.js";

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

export default function Page({ allProjectsData }) {
    return (
        <Layout title="Projects">
        <section>
            <div>
                <h1>Projects</h1>
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
