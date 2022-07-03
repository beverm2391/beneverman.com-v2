import styles from '../styles/mystory.module.css'
import Image from 'next/image'
import mystoryimage from '../public/images/mystory.png'
import Scroll from '../components/scroll'
import breakpointabout from '../pages/about.js'

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

    return (
        <section className="section">
            <div className={ScrollClassChange()}>
                <h1>Why I Do It</h1>
                <div className={styles.textcontainer}>
                    <p className={styles.mystorytext}>
                        I have spent the past eight years living with mental illness. I&#39;ve been diagnosed with treatment-resistant depression (non-responsive to pharmacology), OCD, and generalized anxiety disorder, among other things.
                    </p>
                    <p>
                        The treatment-resistant nature of the depression forced me to seek out more intense interventions such as Electroconvulsive Therapy (ECT) and Transcranial Magnetic Stimulation (TMS). Since I have had access to the care I need, I have been in complete remission for about two and a half years.
                    </p>
                    <p>
                        I recognize that I am incredibly privileged to have received such a high quality of care, so my mission is to combine my lived experience with professional education in social work and business administration to serve others who are still experiencing mental illness.
                    </p>
                </div>
            </div>
        </section>
    );
}