import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';

export default function Layout({ title, children }) {
    return(
        <>
            <Head>
                <link rel="icon" href="/favicon.png"/>
                <title>{title}</title>
            </Head>
            <div className="gradientbackgroundlm">
                <NavbarResponsive />
                    <FadeIn>
                        <main>{children}</main>
                    </FadeIn>
                <Footer />
            </div>
        </>
    )
}