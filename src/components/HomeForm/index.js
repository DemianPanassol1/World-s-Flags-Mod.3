import React, { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { pesquisa } from '../../contexts/FlagsProvider/action';
import { dispatchFlagsContext } from '../../contexts/FlagsProvider/context';

function HomeForm({ hero }) {
    const context = useContext(dispatchFlagsContext);

    const [searchItem, setSearchItem] = useState({
        select1: '',
        select2: '',
        input1: ''
    });

    const setOnChange = (e) => {
        setSearchItem({
            ...searchItem,
            [e.target.name]: e.target.value
        });
    };

    const setSearchOnSubmit = (e) => {
        e.preventDefault();

        const { select1, select2, input1 } = searchItem;

        if (select1 === 'region' && select2 !== '') {
            pesquisa(select1, select2, context);

        } else if (select1 !== 'region' && input1 !== '') {
            pesquisa(select1, input1, context);
        } else {
            console.log('preencha tod9os os campos');
        };

        console.log(searchItem);
    };

    const clearSearchInputs = () => {
        setSearchItem({
            select1: '',
            select2: '',
            input1: ''
        });
    };

    return (
        <motion.section
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            className='mt-10 md:mt-12'
        >
            <div className='flex justify-between mb-8'>
                <motion.button
                    type='button'
                    whileTap={{ scale: 0.95 }}
                    className='px-4 py-2 bg-transparent text-blue-600 border border-blue-600 rounded hover:text-white hover:bg-blue-500 transition-colors'
                    onClick={hero}
                >
                    Voltar
                </motion.button>

                {searchItem.select1 !== '' && (
                    <motion.button
                        initial='initial'
                        animate='animate'
                        variants={variants}
                        type='button'
                        whileTap={{ scale: 0.95 }}
                        className='px-4 py-2 bg-transparent text-blue-600 rounded border border-blue-600'
                        onClick={clearSearchInputs}
                    >
                        Limpar campos
                    </motion.button>
                )}
            </div>

            <form className='mx-auto h-44 lg:h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center max-w-3xl' onSubmit={setSearchOnSubmit}>
                <select name='select1' onChange={setOnChange} value={searchItem.select1} className='w-full lg:w-[320px] mb-4 lg:mb-0 rounded mr-4'>
                    <option value="default" defaultChecked>Pesquisar por...</option>
                    <option value="region">Região</option>
                    <option value="capital">Capital</option>
                    <option value="language">Lingua</option>
                    <option value="country">País</option>
                    <option value="currency">Moeda</option>
                </select>

                <AnimatePresence exitBeforeEnter={true}>
                    {(searchItem.select1 !== '' && searchItem.select1 !== 'default') && (
                        searchItem.select1 === 'region' ? <FiltroRegiao onChange={setOnChange} key={54353} /> : <FiltroTexto onChange={setOnChange} key={67575} />
                    )}
                </AnimatePresence>

                <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    className='px-4 py-2 bg-purple-600 text-white rounded shadow-lg block mt-10 lg:mt-0'
                >
                    Pesquisar
                </motion.button>
            </form>
        </motion.section>
    );
};

export default HomeForm;

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial2: { opacity: 0, y: -100 },
    animate2: { opacity: 1, y: 0 },
    exit2: { opacity: 0, y: -100 }
};

const FiltroRegiao = ({ onChange }) => {
    return (
        <motion.select
            initial='initial2'
            animate='animate2'
            exit='exit2'
            variants={variants}
            name='select2'
            className='w-full lg:w-[320px] rounded mr-4'
            onChange={onChange}
        >
            <option value="default" defaultChecked>Escolha uma Região</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
        </motion.select>
    );
};

const FiltroTexto = ({ onChange }) => {
    return (
        <motion.input
            initial='initial2'
            animate='animate2'
            exit='exit2'
            variants={variants}
            name='input1'
            type="text"
            onChange={onChange}
            className='w-full lg:w-[320px] rounded mr-4'
            placeholder='Digite...'
        />
    );
};