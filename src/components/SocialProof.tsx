import { useRef, useState } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import { socialProofData } from "../data/SectionsData"
export default function SocialProof() {
    const [stopScroll, setStopScroll] = useState(false);

    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="social-proof" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto">
                <div className='px-4'>
                    
                
                <Title
                    title="Social Proof"
                    heading="Trusted by Builders Who Value Deep Work"
                    description="High-performance developers, designers and founders are already restructuring how they work."
                />
                <motion.div 
                        initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            className="p-5 bg-white/3 border border-white/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-2 rounded-2xl">
                    <div className='text-center'>
                        <h3 className="text-3xl md:text-4xl font-bold">2,400+</h3>
                        <p className="text-indigo-400">Focus Sessions</p>
                    </div>
                    <div className='text-center'>
                        <h3 className="text-3xl md:text-4xl font-bold">38%</h3>
                        <p className="text-indigo-400">Avg. Growth</p>
                    </div>
                    <div className='text-center'>
                        <h3 className="text-3xl md:text-4xl font-bold">91%</h3>
                        <p className="text-indigo-400">Lower Burnout</p>
                    </div>
                    <div className='text-center'>
                        <h3 className="text-3xl md:text-4xl font-bold">120+</h3>
                        <p className="text-indigo-400">Beta Users</p>
                    </div>
                </motion.div>
                
                <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }} className="py-10">
                    <p className="text-center">INTEGRATED WITH YOUR WORKFLOW</p>
                </motion.div>
                </div>
                <div className="overflow-hidden w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-950 to-transparent" />
                        <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: socialProofData.length * 5500 + "ms" }}>
                            <div className="flex gap-5">
                                {[...socialProofData, ...socialProofData].map((card, i) => (
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
                                                card.classList.add("transition", "duration-300", "hover:border-white/15");
                                            }
                                        }}
                                        className="rounded-2xl w-72 p-4 bg-white/3 border border-white/6 grid gap-2"
                                    >   
                                        <div className='flex gap-2'>
                                            <img src={card.img} alt={card.name} loading="lazy" width={50} height={50} className='w-10 h-10 rounded-full'/>
                                            <div>
                                                <h3 className="text-md font-semibold">{card.name}</h3>
                                                <p className="text-gray-300 text-xs leading-relaxed">{card.job}</p>
                                            </div>
                                        </div>
                                    
                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{card.content}</p>
                                        
                                        
                                    
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-950 to-transparent" />
                </div>
            </div>
        </section>
    );
}