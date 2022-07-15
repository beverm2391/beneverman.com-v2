import { useEffect } from "react";
import { useRouter } from "next/router";
import { Lethargy } from "lethargy";
import $ from "jquery";

export default function ScrollRoute(href) {
    const router = useRouter()

    useEffect(() => {
        const wheel = 

        $(window).on('mousewheel DOMMouseScroll wheel MozMousePixelScroll', function (e) {
            e.preventDefault()
            e.stopPropagation();
            if ((window.scrollY == document.body.scrollHeight - window.innerHeight) && (wheel)) {

                e.preventDefault()
                e.stopPropagation()

                router.push(href)
                $(window).off('mousewheel DOMMouseScroll wheel MozMousePixelScroll')
            }
        });

    }, [href, router]);
}
