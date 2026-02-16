import { FiZap, FiArrowRight } from "react-icons/fi";
import { PrimaryButton, OutlineButton } from './Buttons';
import { motion } from 'framer-motion';
import  HeroDashboard  from "../assets/img/hero-dashboard.png"

export default function Hero() {
    const specialFeatures = [
        "No credit card",
        "30 days free trial",
        "Setup in 10 minutes",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 gap-6">
            <motion.a href="/" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-pink-100 bg-indigo-200/15"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-indigo-800 text-white text-xs px-3.5 py-1 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1">
                    <span>Productivity, reimagined</span>
                </p>
            </motion.a>
            <motion.h1 className="text-4xl md:text-5xl text-center font-bold leading-tight mb-2"
                initial={{ y: 60, opacity: 0 }}animate={{ y: 0, opacity: 1 }}transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}>
                Build and create at your peak. <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                    Without burning out.
                </span>
            </motion.h1>

            <motion.div className="flex justify-center"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >
                <p className="text-gray-300 text-center max-w-xl mb-8">FocusFlow aligns your tasks with your cognitive energy, reducing decision fatigue and sustaining high performance.</p>
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}>
                <a href="/" className="w-full sm:w-auto">
                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                        Start your project
                        <FiArrowRight className="size-4" />
                    </PrimaryButton>
                </a>

                <OutlineButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                    <FiZap className="size-4" />
                    View our work
                </OutlineButton>
            </motion.div>
            <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5}} className="relative transform-3d w-full max-w-5xl" >
                <motion.img src={HeroDashboard.src}
                    className="w-full mask-radial-[100%_100%] mask-radial-from-10% mask-radial-at-top rounded-2xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent"
                    alt="hero section showcase"
                />
            </motion.div>
        </div>
    );
};