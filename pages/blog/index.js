import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout.js";

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
        <section>
            <div>
                <h1>Blog</h1>
                <ul>
                    {allPostsData.map(({ id, title, date }) => (
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
