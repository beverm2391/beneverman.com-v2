import React, { useState, useEffect } from "react";

export default function Scroll() {
	const [scrollarray, setScrollArray] = useState(0);

	useEffect(() => {

		const handleScroll = () => {
			setScrollArray([window.scrollY, (document.body.scrollHeight), (window.innerHeight)]);
		}

		window.addEventListener('scroll', handleScroll, { passive: true });

	}, []);

    // array contains the current scroll position and the max scroll position
	return (scrollarray)
}