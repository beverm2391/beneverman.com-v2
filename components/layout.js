import Navbar from './navbar.js';
import Footer from './footer.js';

export default function Layout({ title, children }) {
    return(
        <>
            <title>{title}</title>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}