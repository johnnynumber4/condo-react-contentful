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
        <div className='activities-list'>
            {activitiesListings.map((item) => {
                const { id, activityTitle, activityText } = item
                return (
                    <div key={id}>
                        <div>
                            <h2>{activityTitle}</h2>
                            <div dangerouslySetInnerHTML={{ __html: activityText }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Activities