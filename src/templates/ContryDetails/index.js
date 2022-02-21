import React from 'react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';

function ContryDetails() {
    const params = useParams();

    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
        >
            <h1>página para mostrar detalhes dos países</h1>
            <p>{params.contryName}</p>
        </motion.main>
    );
};

export default ContryDetails;


const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};