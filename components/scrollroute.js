import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollRoute(href) {

    const router = useRouter()

    useEffect(() => {

        const handleScroll = (e) => {
            if (window.scrollY == document.body.scrollHeight - window.innerHeight) {
    
                e.preventDefault()
                router.push(href)
                window.removeEventListener('scroll', handleScroll, { passive: true })
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        
    }, [href, router]);
}
