import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from '../../components/Navbar';
import AboutPage from '../About';
import ContryDetails from '../ContryDetails';
import HomePage from '../Home';

function App() {
    const location = useLocation();

    return (
        <Fragment>
            <Navbar />
            <AnimatePresence exitBeforeEnter={true} initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path='/'
                        element={<HomePage />}
                    />
                    <Route
                        path='/about'
                        element={<AboutPage />}
                    />]
                    <Route
                        path='/:contryName/details'
                        element={<ContryDetails />}
                    />
                    <Route
                        path='*'
                        element={
                            <main className='container mx-auto mt-10'>
                                <p className='text-center'>
                                    Não tem nada aqui {/* botar algo descente */}
                                </p>
                            </main>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </Fragment>
    );
};

export default App;