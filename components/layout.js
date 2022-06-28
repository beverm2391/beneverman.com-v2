import Navbar from './navbar.js';
import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';

export default function Layout({ title, children }) {
    return(
        <>
            <Head>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="backgroundlm">
                <title>{title}</title>
                <NavbarResponsive />
                    <FadeIn>
                        <main>{children}</main>
                    </FadeIn>
                <Footer />
            </div>
        </>
    )
}