import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';
import Scroll from './scroll.js';

const backgrounds = ['backgroundlm', 'gradientbackgrounddm', 'gradientbackgroundlm']

export default function Layout({ title, children}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{title}</title>
            </Head>
            <div className={backgrounds[0]}>
                <NavbarResponsive />
                <Scroll/>
                {/* <FadeIn> */}
                    <main>{children}</main>
                {/* </FadeIn> */}
                <Footer />
            </div> 
        </>
    )
}