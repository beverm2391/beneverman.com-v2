import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export default function AnimationFadeInOnView(props) {
    const controls = useAnimation();
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);
    
    return (
        <motion.div 
        ref={ref}
            className="Box" 
            initial="hidden"
            animate={controls}
            variants={boxVariants}
        >
            {props.children}
        </motion.div>
    )
}