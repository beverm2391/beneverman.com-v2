import { MotionConfig } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/animations/titles_v1.json";
import motion from "framer-motion";

export default function AroundText(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };

    return (
        <div className="animation" style={{opacity: .5 }}>
                <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={1000}            
                >
                    {props.children}
                </Lottie>
        </div>
    );
}