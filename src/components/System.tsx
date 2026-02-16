import { useRef } from 'react';
import { systemData } from '../data/SectionsData.tsx';
import DashboardSystem from '../assets/img/system-dashboard.png'
import Title from './Title.tsx';
import { motion } from 'framer-motion';

export default function System() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="system" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="THE SYSTEM"
                    heading="A Cognitive System — Not Another To-Do List"
                    description="FocusFlow transforms how work is structured by aligning energy, focus cycles and execution into one adaptive system."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className='grid gap-0'>

                    
                        {systemData.map((item, i) => (
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
                                        card.classList.add("transition", "duration-300");
                                    }
                                }}
                                className="rounded-2xl md:px-5 flex group"
                            >
                                <div className="flex gap-2">
                                    <div className='flex-1 relative justify-center w-full'>
                                        <div className="w-12 h-12 rounded-lg transition duration-300 border bg-white/3 border-white/6 group-has-hover:border-indigo-500/50 group-has-hover:bg-indigo-900/30 group-has-hover:text-indigo-400 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div className='bg-white/6 w-1 h-[calc(100%-48px)] translate-x-[22px] group-last:hidden'></div>
                                    </div>
                                    
                                    <div className='mb-10'>
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                
                                
                            </motion.div>
                        ))}
                    </div>
                    <div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5}}>
                            <img src={DashboardSystem.src} alt="The System" loading="lazy" width={400} height={200} className="w-full h-full rounded-2xl"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};