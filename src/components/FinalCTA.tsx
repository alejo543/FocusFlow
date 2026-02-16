import { PrimaryButton, OutlineButton } from './Buttons';
import Title from './Title';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { LuPlay } from 'react-icons/lu';

export default function FinalCTA() {
    return (
        <section id="final-cta" className="py-20 px-5 lg:px-0">
            <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }} 
                className="max-w-6xl mx-auto bg-white/3 border border-white/6 rounded-2xl px-6 py-15 flex items-center justify-center">
                <div>
                    <Title
                        heading="Stop Managing Tasks. Start Managing Energy."
                        description="Your cognitive performance is your competitive advantage. Design it intentionally."
                    />
                    <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                    >
                        <a href="/" className="w-full sm:w-auto">
                            <PrimaryButton className="max-sm:w-full py-3 px-7">
                                Start Your Free Beta
                                <FiArrowRight className="size-4" />
                            </PrimaryButton>
                        </a>

                        <OutlineButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                            <LuPlay className="size-4" />
                            Book a Demo
                        </OutlineButton>
                    </motion.div>
                    <motion.div initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }} className='flex gap-3 justify-center items-center text-gray-400 text-sm pt-10'>
                        <p>No credit card required</p>
                        <span className="hidden sm:inline">•</span>
                        <p>Private beta access</p>
                        <span className="hidden sm:inline">•</span>
                        <p>Cancel anytime</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};