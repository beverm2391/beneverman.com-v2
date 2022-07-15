import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';

const backgrounds = ['backgrounddm', 'gradientbackgrounddm', 'gradientbackgroundlm']
const defaultbackground = 'backgrounddm'

export default function Layout({ title, children, background, footerclass, hidenavbar, navbarclass}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{title}</title>
            </Head>
            <div className={background ? background : defaultbackground}>
                {hidenavbar !== true && <NavbarResponsive navbarclass = {navbarclass}/>}
                    <main>{children}</main>
                {footerclass && <Footer footerclass={footerclass} />}
            </div> 
        </>
    )
}