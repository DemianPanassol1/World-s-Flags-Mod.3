import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';
import welcome from './welcome';

function HomeHero({ hero }) {

    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            className='text-center mt-10 md:mt-12'
        >
            <div className='text-4xl font-semibold text-blue-600'>
                <Typewriter
                    options={{
                        strings: welcome,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <h2 className='text-6xl text-black mt-4 font-medium'>World Flags!</h2>

            <p className='max-w-2xl mx-auto mt-6'>Escolha um filtro pelo qual deseja realizar a pesquisa. Clique em uma bandeira para mostrar mais detalhes do país como população, línguas utilizadas e países que fazem fronteira.</p>

            <p className='max-w-lg mx-auto mt-4 mb-10'>Aperte em Começar para fazer uma pesquisa. Encontrou algum bug ou erro? Por favor, entre em <a className='text-blue-800 border-b border-blue-800' target='_blank' rel='noreferrer' href="https://demianpanassol.com/contact">contato</a>.</p>


            <motion.button
                whileTap={{ scale: 0.95 }}
                className='px-4 py-2 bg-blue-400 text-white rounded shadow-lg'
                onClick={() => hero()}
            >
                Começar
            </motion.button>

        </motion.div>
    );
};

export default HomeHero;

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};