import styles from '../styles/mystory.module.css'
import Scroll from '../components/scroll'
import GradientUnderline from './animations/gradientunderline'
import { FiArrowUpRight } from 'react-icons/fi'
import linkstyles from '../styles/linkunderline.module.css';
import { useInView } from 'react-intersection-observer';

function ScrollClassChange() {

    const scrollmaxheight = Scroll()[1]
    const scrollheight = (Scroll()[0])
    // + .5*(window.innerHeight)

    const breakpoint1 = 600;

    if (scrollheight > breakpoint1)
        return styles.containerblack
    else
        // I had to give it a default height because the variable was not being set until the user scrolled, so it would be a height of 0 initially
        return styles.container
}

export default function MyStory() {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <section className="section">
            <div className={ScrollClassChange()}>
                <h1>Why I Do It</h1>
                <div className={styles.textcontainer}>
                    <p className={styles.mystorytext}>
                        I have spent <GradientUnderline inView={inView}>the past eight years living with mental illness</GradientUnderline>. I&#39;ve been diagnosed with treatment-resistant depression (non-responsive to pharmacology), obsessive compulsive disorder, and generalized anxiety disorder, among other things.
                    </p>
                    <p>
                        The treatment-resistant nature of the depression forced me to seek out more intense interventions such as&nbsp;

                        <a href="https://www.mayoclinic.org/tests-procedures/electroconvulsive-therapy/about/pac-20393894" alt="resume" className={linkstyles.linkunderline}>Electroconvulsive Therapy<FiArrowUpRight class={styles.icon} size={16}/></a> 
                        
                        &nbsp;and Transcranial Magnetic Stimulation. I have had access to the care I need, that&#39;s why <GradientUnderline inView={inView}>I have been in complete remission for about two and a half years</GradientUnderline>.
                    </p>
                    <p ref={ref}>
                        I recognize that I am incredibly privileged to have received such a high quality of care, so my mission is to combine my lived experience with professional education in social work and business administration to <GradientUnderline inView={inView}>serve others who are still experiencing mental illness</GradientUnderline>.
                    </p>
                </div>
            </div>
        </section>
    );
}