import Layout from '../components/layout'
import Hero from '../components/hero'

export default function Page() {

	return (
		<section className="relative">
			<Hero />
		</section>
	)
}

Page.getLayout = function getLayout(page) {
	return <Layout title="Homepage" background={0}>{page}</Layout>
}