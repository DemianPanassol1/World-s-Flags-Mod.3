import React from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from 'framer-motion';

function ContryDetails() {
    const { contryName } = useParams();

    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            className='container mx-auto mt-10 lg:mt-16'
        >

            <div>
                <Link
                    to='/'
                    className='px-4 py-2 bg-blue-400 text-white rounded shadow-lg'
                >
                    De volta a pesquisa
                </Link>
            </div>

            <h1>página para mostrar detalhes dos países</h1>
            <p>{contryName}</p>


        </motion.main>
    );
};

export default ContryDetails;


const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};