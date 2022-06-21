import styles from '../styles/canvas.module.css';
import Script from 'next/script'

export default function Canvas() {
    return (
        <>
        <Script src="../componenets/gradient.js"/>
        <canvas id="gradientcanvas" data-transition-in />
        </>
    );
}