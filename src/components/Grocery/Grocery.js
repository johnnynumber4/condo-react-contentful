import React, { useContext } from 'react'
import Loader from '../Loader/Loader'
import { Context } from '../../context/Context'

const Grocery = () => {
    const { isGroceryLoading, groceryListings } = useContext(Context)

    if (isGroceryLoading) {
        return <Loader />
    }

    if (!Array.isArray(groceryListings) || !groceryListings.length) {
        return null
    }

    return (
        <div className='grocery-list'>
            {
                groceryListings.map((item) => {
                    const { id, groceryTitle, groceryLocation } = item
                    console.log(groceryLocation)
                    return (
                        <div >
                            <div>
                                <h2>{groceryTitle}</h2>
                                <iframe src={`https://maps.google.com/maps?q=${groceryLocation.lat},${groceryLocation.lon}&hl=es;&output=embed`}></iframe>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Grocery