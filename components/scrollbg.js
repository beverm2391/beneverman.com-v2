import styles from '../styles/scrollbg.module.css'
import Scroll from '../components/scroll'

function backgroundclass() {

    const scrollmaxheight = Scroll()[1]
    const scrollheight = (Scroll()[0])
    // + .5*(window.innerHeight)

    // this is the scroll position, so the top of the page
    const breakpoint1 = 350;

    if (scrollheight > breakpoint1) 
        return styles.blue
    else
        // I had to give it a default height because the variable was not being set until the user scrolled, so it would be a height of 0 initially
        return `${styles.default} + ${styles.defaultheight}`
}

export default function Scrollbg() {

    var scrollmaxheight = Scroll()[1]

    return (
        <div className={backgroundclass()} style={{height : scrollmaxheight}}/>
    )
}