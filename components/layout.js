import Footer from './footer.js';
import FadeIn from './animations/fadein.js';
import Head from 'next/head';
import NavbarResponsive from './navbarresponsive.js';
import { NextSeo } from 'next-seo';

const backgrounds = ['backgrounddm', 'gradientbackgrounddm', 'gradientbackgroundlm']
const defaultbackground = 'backgrounddm'

export default function Layout({ title, children, background, footerclass, hidenavbar, navbarclass}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{title}</title>
                <meta name="description" content="I'm a social work student, MBA student, and a developer. Looking to make a significant impact within mental healthcare." />
            </Head>
            <div className={background ? background : defaultbackground}>
                {hidenavbar !== true && <NavbarResponsive navbarclass = {navbarclass}/>}
                    <main>{children}</main>
                {footerclass && <Footer footerclass={footerclass} />}
            </div> 
        </>
    )
}