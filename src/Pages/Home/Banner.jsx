import { motion } from "motion/react"
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"
import { useState } from "react";
const Banner = () => {

    const [width, setWidth] = useState(window.innerWidth)

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="md:flex-1">
                    <motion.img
                        animate={{
                            // rotate: 360,
                            transition: { duration: 4, repeat: Infinity },
                            y: [50, 100, 50],

                        }}
                        src={team1}
                        className="h-52 lg:h-60 xl:h-72 lg:w-72 xl:w-96 2xl:w-auto 2xl:h-80 rounded-lg shadow-2xl"
                    />
                    <motion.img
                        animate={{
                            transition: { duration: width > 500 ? 7 : 3, repeat: Infinity },
                            x: width > 1023 ? [100, 200, 100] : [-10, 130, -10],
                        }}
                        src={team2}
                        className="h-32 lg:h-60 xl:h-72 lg:w-72 xl:w-96 2xl:w-auto 2xl:h-80 rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;