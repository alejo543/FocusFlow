import { useRef } from 'react';
import { problemData } from '../data/SectionsData.tsx';
import Title from './Title.tsx';
import { motion } from 'framer-motion';

export default function Problem() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="problem" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="THE PROBLEM"
                    heading="You’re not unproductive. You’re cognitively overloaded."
                    description="Modern work isn’t about effort anymore. It’s about managing mental energy in a world designed to fragment your focus."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problemData.map((item, i) => (
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
                            className="rounded-2xl p-6 bg-white/3 border border-white/6"
                        >
                            <div className="w-12 h-12 rounded-lg bg-indigo-900/20 flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};