import Layout from "../components/layout"
import AnimationFadeIn from "../components/animationfadein"

export default function Page() {
    return (
        <Layout title="Contact">
            <AnimationFadeIn>
                <section className="section">
                    <div className="wrapper shiftup">
                        <h1>Contact</h1>
                    </div>
                </section>
            </AnimationFadeIn>
        </Layout>
    )
}