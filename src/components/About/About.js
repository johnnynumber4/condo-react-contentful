import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import Loader from '../Loader/Loader'

const About = () => {
    const { about, isAboutLoading } = useContext(Context)
    if(isAboutLoading) {
        return <Loader />
    }

    const { aboutTitle, aboutContent, aboutImage } = about
    console.log(aboutImage)

    return (
        <section className='about' id='about'>
            <div className='row'>
                <div className='column'>
                    <h2 className='titleText'>{aboutTitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
                </div>
                <div className='column'>
                    <div className='imgWrap'>
                        <img src={aboutImage} alt={aboutTitle} />
                    </div>
                </div>
            </div>
            <div className='row form-container'>
                <iframe title="suggestion" src="https://docs.google.com/forms/d/e/1FAIpQLSdU7bVehouETnAhvK2aehHnMxhdwM6wQ-iRhVOHqCEQ8ctFtw/viewform?embedded=true" width="400" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        </section>
    )
}

export default About