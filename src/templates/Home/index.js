import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../../components/HomeHero';

function HomePage() {
    const [showHero, setShowHero] = useState(true); ///Remover


    const handleShowHero = () => { ///Remover
        setShowHero(!showHero);  ///Remover
    }; ///Remover

    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
        >
            <section className='container mx-auto px-4 md:px-8'>
                {showHero && <HomeHero hero={handleShowHero} />}

                <form>

                </form>

            </section>
        </motion.main>
    );
};

export default HomePage;

const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};