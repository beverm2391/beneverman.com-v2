import { motion } from 'framer-motion';
import styles from '../../styles/blackunderline.module.css';
import { useState, useEffect } from 'react';

export default function BlackUnderline(props) {
    // useState
    const [isActive, setActive] = useState(false);
    const OnMount = () => {
        setActive(true);
    };

    // this runs the function one single time when the component is mounted
    // typically you dont want to call a function in useEffect
    useEffect(() => {
        OnMount();
    }, []);

    return (
        <>
            <span className={isActive ? styles.active : styles.inactive}>{props.children}</span>
        </>
    );
}