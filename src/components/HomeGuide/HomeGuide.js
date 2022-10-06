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
        <section className='home-guide' id='home-guide'>
            <div className='row'>
                <div className='column'>
                    <div dangerouslySetInnerHTML={{ __html: accessText }} />
                </div>
                <div className='column'>
                    <div className='imgWrap'>
                        <img src={condoMapImage} alt="Condo Map" />
                    </div>
                </div>
                <div className='column'>
                    <div className='imgWrap'>
                        <img src={channelGuideImage} alt="Channel Guide" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeGuide