import Layout from '../components/layout'
import Hero from '../components/hero'
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade"
import ScrollRoute from '../components/scrollroute';


export default function Page() {

	ScrollRoute('/about')

	return (
		<section className="relative">
			<Fade delay={200}>
				<Hero />
			</Fade>
			<div style={{height: "1px"}}/>
		</section>
	)
}

Page.getLayout = function getLayout(page) {
	return <Layout title="Homepage">{page}</Layout>
}