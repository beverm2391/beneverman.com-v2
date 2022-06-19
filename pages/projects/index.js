import FeaturedProjects from "../../components/featured-projects";
import Layout from "../../components/layout";

const Index = props => {
    return (
        <Layout
            pathname="/"
            siteTitle={props.title}
            siteDescription={props.description}
        >

            <seciton>
                <FeaturedProjects />
            </seciton>

        </Layout>
    )
}

export default Index;