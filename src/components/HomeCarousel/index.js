import React, { useContext } from 'react';
import { flagsContext } from '../../contexts/FlagsProvider/context';
import CarouselItem from './CarouselItem';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HomeCarousel() {
    const { result/* , isLoading */ } = useContext(flagsContext);

    // console.log(result);
    return result !== null && (
        result.map(contry => {
            return <CarouselItem data={contry} key={contry.name.official} />
        })

    );
};

export default HomeCarousel;