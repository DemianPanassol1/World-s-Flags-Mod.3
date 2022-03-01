import React, { useContext } from 'react';
import { flagsContext } from '../../contexts/FlagsProvider/context';

function HomeCarousel() {
    const { result/* , isLoading */ } = useContext(flagsContext);

    console.log(result);
    return result !== null && (
        <section>

        </section>
    );
};

export default HomeCarousel;