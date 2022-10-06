import React, { useContext } from 'react'
import CarouselSlide from './CarouselSlide'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import Loader from '../Loader/Loader'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { Context } from '../../context/Context'

SwiperCore.use([Navigation])

const Carousel = () => {
    const { isCarouselLoading, carouselSlides } = useContext(Context)

    if (isCarouselLoading) {
        return <Loader />
    }

    if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
        return null
    }

    return (
        <div className='carousel'>
            <Swiper navigation>
                {carouselSlides.map((item) => {
                const { id, slideBg, slideTitle, slideDescription, slideLink } = item
                return (
                    <SwiperSlide key={id}>
                        <CarouselSlide slideTitle={slideTitle} slideDescription={slideDescription} slideBg={slideBg} slideLink={slideLink} />
                    </SwiperSlide>
                )
            })}</Swiper>
        </div>
    )
}

export default Carousel