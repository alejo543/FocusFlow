import { GiPolarStar } from 'react-icons/gi';
import { footerLinks } from '../data/SectionsData';
import { motion } from 'framer-motion';

export default function Footer() {

    return (
        <motion.footer className="bg-white/6 border-t border-white/6 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid justify-center gap-10 py-10 border-b border-white/10">
                    <a href='/#' className="flex justify-center items-center gap-2 font-bold">
                        <span className='w-10 h-10 bg-indigo-500 p-2 rounded-lg'>
                            <GiPolarStar className="w-6 h-6 text-white"/>
                        </span>
                        FOCUSFLOW
                    </a>
                    <div className="grid w-full justify-center gap-5">
                        {footerLinks.map((section, index) => (
                            <div key={index} className="group">
                                <ul className="text-sm space-y-1 flex justify-center flex-wrap gap-6">
                                    {section.links.map((link,index) => (
                                        <li key={index} className='text-center transition duration-300 hover:text-white group-last:hover:-translate-y-1'>
                                            <a href={link.url} aria-label={link.label}>
                                                {link.name ? <>{link.name}</> : <></>}
                                                {link.icon ? <>{link.icon}</> : <></>}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="py-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} {' '}
                    <a href="/">
                        FocusFlow
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};