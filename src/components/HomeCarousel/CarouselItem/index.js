import React from 'react';
import { Link } from "react-router-dom";

function CarouselItem({ data: { flags: { png }, name: { official } } }) {

    return (
        <div className='p-4 w-fit'>
            <Link
                to={`/${official}/details`}
            >
                <img className='w-60 h-auto shadow shadow-black' src={png} alt={`Bandeira do ${official}`} />
            </Link>
        </div>
    );
};

export default CarouselItem;