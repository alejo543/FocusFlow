import { useRef } from "react";
import { resultData } from "../data/SectionsData";
import Title from "./Title";
import { motion } from 'framer-motion';
import DasboradResult from "../assets/img/result-dashboard.png"
export default function Result(){
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return(
        <section id="results" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="RESULTS / PERFORMANCE"
                    heading="Work With Clarity. Finish With Energy."
                    description="When your workflow aligns with your cognitive rhythm, performance stops feeling forced — and starts feeling natural."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                        <div className="grid gap-4">
                            {resultData.map((item, i) => (
                                <motion.div
                                    ref={(el) => {
                                        refs.current[i] = el;
                                    }}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                    key={i}
                                    onAnimationComplete={() => {
                                        const card = refs.current[i];
                                        if (card) {
                                            card.classList.add("transition", "duration-300", "hover:border-white/15", "hover:-translate-y-1");
                                        }
                                    }}
                                    className="group rounded-2xl px-6 py-3 bg-white/3 border border-white/6 flex items-center gap-2 last:rounded-none last:border-l-4 last:border-0 last:border-l-indigo-600 last:bg-transparent last:px-3 last:mt-10"
                                >   
                                    { item.icon ? 
                                    <div className="w-12 h-12 rounded-lg border-indigo-500/50 bg-indigo-900/30 text-indigo-600 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    :<></>
                                    }
                                    <h3 className="text-lg font-semibold group-last:text-2xl group-last:italic">{item.text}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <motion.div  initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5}}>
                        <img src={DasboradResult.src} className="w-full" alt="Performance Dashboard" loading="lazy" width={400} height={350} />
                    </motion.div>
                    
                </div>
            </div>
        </section>
    )
}