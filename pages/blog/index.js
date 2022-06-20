import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout.js";
import Link from "next/link";
import Date from "../../components/date.js";

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
                                <Link href={`/blog/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
}
