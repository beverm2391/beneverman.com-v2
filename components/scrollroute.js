import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ScrollRoute(href) {

    const router = useRouter()

    useEffect(() => {

        const handleWheel = (e) => {
            if (window.scrollY == document.body.scrollHeight - window.innerHeight) {
                e.preventDefault()
                router.push(href)
                window.removeEventListener('wheel', handleWheel)
            }

            console.log(window.scrollY, document.body.scrollHeight - window.innerHeight)
        }

        window.addEventListener('wheel', handleWheel)

    }, [href, router]);
}