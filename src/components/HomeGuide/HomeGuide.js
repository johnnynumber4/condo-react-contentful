import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import Loader from '../Loader/Loader'

const HomeGuide = () => {
    const { homeGuide, isHomeGuideLoading } = useContext(Context)
    if(isHomeGuideLoading) {
        return <Loader />
    }

    const { 
        accessText
    } = homeGuide

    return (
        <section className='home-guide'>
            <div dangerouslySetInnerHTML={{ __html: accessText }} />
        </section>
    )
}

export default HomeGuide