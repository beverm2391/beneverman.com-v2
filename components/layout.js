import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';
import Scroll from './scroll.js';

const backgrounds = ['backgrounddm', 'gradientbackgrounddm', 'gradientbackgroundlm']
const defaultbackground = 'backgrounddm'

export default function Layout({ title, children, background}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{title}</title>
            </Head>
            <div className={background ? background: defaultbackground}>
                <NavbarResponsive />
                {/* <FadeIn> */}
                    <main>{children}</main>
                {/* </FadeIn> */}
                <Footer />
            </div> 
        </>
    )
}