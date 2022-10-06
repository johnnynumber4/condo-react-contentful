import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import Loader from '../Loader/Loader'

const HomeGuide = () => {
    const { homeGuide, isHomeGuideLoading } = useContext(Context)
    if(isHomeGuideLoading) {
        return <Loader />
    }

    const { accessText, condoMapImage, channelGuideImage } = homeGuide

    return (
        <section className='home-guide'>
            <div dangerouslySetInnerHTML={{ __html: accessText }} />
            <div>
                <img src={condoMapImage} alt="Condo Map" />
            </div>
            <div>
                <img src={channelGuideImage} alt="Channel Guide" />
            </div>
        </section>
    )
}

export default HomeGuide