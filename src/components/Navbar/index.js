import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Navbar() {
    return (
        <header className='bg-blue-400 shadow-lg'>
            <section className='flex container mx-auto text-white px-4 md:px-8 py-6 justify-between'>
                <div className='flex items-center'>
                    <i className="fa-solid fa-earth-americas mr-4 text-3xl"></i>
                    <h1 className='text-xl'>World Flags</h1>
                </div>

                <ul className='flex items-center justify-between'>
                    <motion.li
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                        className='mr-8 md:mr-12'
                    >
                        <Link
                            className='hover:text-blue-800 transition-colors duration-200'
                            to="/"
                        >
                            Início
                        </Link>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            className='hover:text-blue-800 transition-colors duration-200'
                            to="/about"
                        >
                            Sobre
                        </Link>
                    </motion.li>
                </ul>
            </section>
        </header>
    );
};

export default Navbar;