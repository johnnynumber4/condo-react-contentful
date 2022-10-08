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
        <section className='grocery-list'>
            {groceryListings.map((item) => {
                const { id, groceryTitle, groceryLocation } = item
                return (
                    <div key={id}>
                            <div className='row'>
                                <div className='column'>
                                    <h2>{groceryTitle}</h2>
                                    <div>This is a desc.</div>
                                </div>
                                <div className='column'>
                            <iframe title={id} src={`https://maps.google.com/maps?q=${groceryLocation.lat},${groceryLocation.lon}&hl=es;&output=embed`}></iframe>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Grocery