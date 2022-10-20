import React, { useContext } from 'react'
import Loader from '../Loader/Loader'
import { Context } from '../../context/Context'

const Activities = () => {
    const { isActivitiesLoading, activitiesListings } = useContext(Context)

    if (isActivitiesLoading) {
        return <Loader />
    }

    if (!Array.isArray(activitiesListings) || !activitiesListings.length) {
        return null
    }

    return (
        <section className='activities-list'>
            {activitiesListings.map((item) => {
                const { id, activityTitle, activityText, activityImage } = item
                return (
                    <div className='row' key={id}>
                        <div className='column'>
                            <div dangerouslySetInnerHTML={{ __html: activityText }} />
                        </div>
                        <div className='column'>
                            <div className='imgWrap'>
                                <img src={activityImage} alt={activityTitle} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Activities