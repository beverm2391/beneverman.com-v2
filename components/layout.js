import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';

const backgrounds = ['backgroundlm', 'gradientbackgroundlm']

export default function Layout({ title, children, background }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{title}</title>
            </Head>
            <div className={backgrounds[background]}>
                <NavbarResponsive />
                {/* <FadeIn> */}
                    <main>{children}</main>
                {/* </FadeIn> */}
                <Footer />
            </div> 
        </>
    )
}