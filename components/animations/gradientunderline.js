import { motion } from 'framer-motion';
import styles from '../../styles/gradientunderline.module.css';
import { useState, useEffect } from 'react';

export default function GradientUnderline(props) {
    // useState
    const [isActive, setActive] = useState(false);
    const OnMount = () => {
        setActive(true);
    };

    // this runs the function one single time when the component is mounted
    // typically you dont want to call a function in useEffect
    useEffect(() => {
        // if inView doesnt exist, go ahead and trigger the animation
        // if inView exists, only trigger the animation if the element is in view
        {props.inView == null ? OnMount(): props.inView == true && OnMount() }
    }, [props.inView]);

    return (
        <>
            <span className={isActive ? styles.active : styles.inactive}>{props.children}</span>
        </>
    );
}

// ! DOCS HERE: https://nickymeuleman.netlify.app/blog/css-animated-wrapping-underline