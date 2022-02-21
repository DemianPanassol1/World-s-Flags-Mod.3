import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
        >
            <h1 className='bg-red-500'>Página sobre</h1>
        </motion.main>
    );
};

export default AboutPage;

const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};