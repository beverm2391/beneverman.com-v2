import Layout from '../../components/layout.js';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
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

export default function Post({ postData }) {
    return (
        <Layout>
            <section className="section">
                <div className="wrapper">
                    {postData.title}
                    <br/>
                    {postData.id}
                    <br/>
                    {postData.date}
                </div>
            </section>
        </Layout>
    );
}

