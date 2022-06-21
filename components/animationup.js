import { motion } from 'framer-motion'

export default function AnimationUp(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0 }}
            transition={{ 'easeInOut': 1, duration: 0.5 }}
        >
            {props.children}
        </motion.div>
    )
}