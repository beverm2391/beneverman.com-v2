import Layout from '../components/layout'
import styles from '../styles/hero.module.css'
import Typewriter from 'typewriter-effect'
import ExploreButton from '../components/explorebutton'

export default function Page() {

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
					<Typewriter
						options={{
							strings: ['social work student', 'MBA student', 'developer'],
							autoStart: true,
							pauseFor: 1000,
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

Page.getLayout = function getLayout(page) {
	return <Layout title="Homepage">{page}</Layout>
}