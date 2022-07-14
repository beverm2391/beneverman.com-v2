import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ScrollRoute(href) {

    const router = useRouter()

    useEffect(() => {
        const handleWheel = (e) => {
                e.preventDefault()
                router.push(href)   
                window.removeEventListener('wheel', handleWheel)
            }

        if (window.scrollY == document.body.scrollHeight - window.innerHeight) {
            window.addEventListener('wheel', handleWheel)
            console.log("bottom")
        }

    }, [href, router]);
}