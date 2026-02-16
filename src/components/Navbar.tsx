import { PrimaryButton } from './Buttons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiPolarStar } from 'react-icons/gi';
import { LuMenu, LuX } from 'react-icons/lu';
import { navLinks } from '../data/SectionsData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
            <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>
                <a href='/#' className="flex items-center gap-2">
                    <span className='w-10 h-10 bg-indigo-500 p-2 rounded-lg'>
                        <GiPolarStar className="w-6 h-6 text-white"/>
                    </span>
                    FOCUSFLOW
                </a>

                <div className='hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-300'>
                    {navLinks.map((link) => (
                        <a href={link.href} key={link.name} className="hover:text-white transition">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className='hidden md:flex items-center justify-end gap-3'>
                    <button className='text-sm font-medium text-gray-300 hover:text-white transition max-sm:hidden'>
                        Sign in
                    </button>
                    <PrimaryButton className='max-sm:text-xs hidden sm:inline-block'>Get Started</PrimaryButton>
                </div>

                <div className='flex md:hidden justify-end '>
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu Mobile">
                        <LuMenu className='size-6' />
                    </button>
                </div>
                
            </div>
            <div className={`flex flex-col items-center justify-center gap-6 text-lg p-5 font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="mb-auto flex justify-between w-full">
                    <a href='/#' className="flex items-center gap-2">
                        <span className='w-10 h-10 bg-indigo-500 p-2 rounded-lg'>
                            <GiPolarStar className="w-6 h-6 text-white"/>
                        </span>
                        FOCUSFLOW
                    </a>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
                        aria-label="Close Menu Mobile"
                    >
                        <LuX />
                    </button>
                </div>
                
                <div className='mb-auto grid text-center gap-3'>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <button onClick={() => setIsOpen(false)} className='font-medium text-gray-300 hover:text-white transition'>
                        Sign in
                    </button>
                    <PrimaryButton onClick={() => setIsOpen(false)}>Get Started</PrimaryButton>
                </div>
            </div>
        </motion.nav>
    );
};