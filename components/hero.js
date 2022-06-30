import styles from '../styles/hero.module.css';
import Typewriter from 'typewriter-effect';
import linkstyles from '../styles/linkunderline.module.css';

export default function Hero() {
	return (
		<section className="section">
			<div className="wrapper">
				<div className={styles.herocontainer}>
					<div className={styles.titlecontainer}>
						<h1 className={styles.herotitle}><span>Ben Everman</span></h1>
						{/* <AroundText /> */}
					</div>
				</div>
				<div className={styles.typewritercontainer}>
					{/* https://www.npmjs.com/package/typewriter-effect */}
					<Typewriter
						options={{
							strings: ['social work student', 'MBA student', 'developer'],
							autoStart: true,
							pauseFor: 2000,
							loop: true,
							delay: 80,
							wrapperClassName: `${styles.typewriter}`,
							cursorClassName: `${styles.typewritercursor}`,
						}}
					/>
				</div>
				{/* <ExploreButton /> */}
			</div>
		</section>
	)
}