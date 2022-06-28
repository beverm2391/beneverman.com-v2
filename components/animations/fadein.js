import { motion, AnimatePresence } from "framer-motion"

export default function FadeIn(props) {
    return (
        <motion.div
            key={props.key}
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0}}
            transition={{ 'easeIn': 1, duration: 0.7 }}
        >
            {props.children}
        </motion.div>
    )
}