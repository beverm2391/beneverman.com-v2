import { motion } from 'framer-motion'

export default function Animation1(props) {
    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: 0.9,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
            }
        }}>
            {props.children}
        </motion.div>
    )
}