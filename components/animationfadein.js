import { motion, AnimatePresence } from "framer-motion"

export default function AnimationFadeIn(props,) {
    return (
        <motion.div
            key={props.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 'easeInOut': 1, duration: 0.5 }}
        >
            {props.children}
        </motion.div>
    )
}