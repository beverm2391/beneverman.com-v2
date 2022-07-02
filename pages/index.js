import Layout from '../components/layout'
import Hero from '../components/hero'
import MyStory from '../components/mystory'
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade"
import Scroll from "../components/scroll"

export default function Page() {

	return (
		<section className="relative">
			<Fade delay={200}>
				<Hero />
			</Fade>
		</section>
	)
}

Page.getLayout = function getLayout(page) {
	return <Layout title="Homepage">{page}</Layout>
}