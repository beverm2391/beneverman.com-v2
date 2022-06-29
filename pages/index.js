import Layout from '../components/layout'
import Hero from '../components/hero'
import MyStory from '../components/mystory'
import React, { useState, useEffect } from "react";

function ScrollCounter() {
	const [scrollarray, setScrollArray] = useState(0);

	useEffect(() => {

		const handleScroll = () => {
			setScrollArray([window.scrollY, document.body.scrollHeight]);
		}

		window.addEventListener('scroll', handleScroll, { passive: true });

	}, []);

	return (scrollarray);
}


export default function Page() {

	const ScrollY = ScrollCounter()[0];
	const ScrollMax = ScrollCounter()[1];

	return (
		<section className="relative">
			<Hero />
		</section>
	)
}

Page.getLayout = function getLayout(page) {
	return <Layout title="Homepage" background={0}>{page}</Layout>
}