import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            className='mt-10 md:mt-12 container mx-auto text-center'
        >
            <h1 className='text-3xl'>Sobre</h1>

            <p className='mt-6 max-w-lg mx-auto'>App criado com React App para consumir a API REST Countries, a qual disponibiliza informações variadas sobre os países do mundo.</p>

            <p className='mt-8'>Link para repositório do projeto: <a className='text-blue-600 hover:text-blue-900' target='_blank' rel='noreferrer' href="https://github.com/DemianPanassol1/World-s-Flags-Mod.3">aqui</a></p>

            <p className='mt-4'>Link para a API: <a className='text-blue-600 hover:text-blue-900' target='_blank' rel='noreferrer' href='https://restcountries.com/'>aqui</a></p>
        </motion.main>
    );
};

export default AboutPage;

const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};