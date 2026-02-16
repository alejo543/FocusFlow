import { toolsData } from '../data/SectionsData.tsx';
import Title from './Title.tsx';
import { motion } from 'framer-motion';

export default function Tools() {
    
    return (
        <section id="tools" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="WHY TOOLS FAIL"
                    heading="Why Productivity Tools Still Don’t Work"
                    description="Most tools optimize tasks. They don’t optimize the brain doing them."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl bg-white/3 border border-white/6 p-4">
                    
                    {toolsData.map((tool, i) => (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            className="rounded-2xl p-6 bg-white/3 border border-white/6 grid gap-4"
                        >
                            <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                                {tool.rows.map((row, i) => (
                                    <div key={i}
                                        className={`rounded-2xl p-6 border ${tool.id == "focusFlow" ? "border-indigo-500/40 bg-indigo-900/30 hover:border-indigo-500/50" : "bg-white/3 border-white/10 hover:border-white/20"} hover:-translate-y-1  transiton duration-300 flex items-center`}
                                    >   
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-0">
                                            {row.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-0">{row.content}</h3>
                                    </div>
                                ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};