import Scroll from "../components/scroll";

const ScrollClassChange = (props) => {

    const scrollmaxheight = Scroll()[1]
    const scrollheight = (Scroll()[0])
    // + .5*(window.innerHeight)

    if (scrollheight > props.breakpoint1)
        return props.class1
    else
        // I had to give it a default height because the variable was not being set until the user scrolled, so it would be a height of 0 initially
        return props.defaultclass
}

export default ScrollClassChange();
