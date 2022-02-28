import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomeHero from '../../components/HomeHero';
import HomeForm from '../../components/HomeForm';

function HomePage() {
    const [showHero, setShowHero] = useState(true);

    const handleShowHero = () => {
        setShowHero(!showHero);
    };

    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
        >
            <AnimatePresence exitBeforeEnter={true} initial={false}>
                <section className='container mx-auto px-4 md:px-8'>
                    {showHero ? (
                        <HomeHero hero={handleShowHero} key={76424} />
                    ) : (
                        <HomeForm hero={handleShowHero} key={78541} />
                    )}
                </section>
            </AnimatePresence>
        </motion.main >
    );
};

export default HomePage;

const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};