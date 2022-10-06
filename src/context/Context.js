import React, { useState, useEffect, useCallback } from 'react'
import {client} from './client'
import { cleanUpAbout, cleanUpCarouselSlides, cleanUpGroceryListings } from './helpers'

export const Context = React.createContext()

export const Provider = (props) => {
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)
    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([])
    const [isGroceryLoading, setIsGroceryLoading] = useState(false)
    const [groceryListings, setGroceryListings] = useState([])

    const saveGroceryListings = useCallback((rawData) => {
        const cleanGroceryListings = cleanUpGroceryListings(rawData)
        setGroceryListings(cleanGroceryListings)
    }, [])

    const getGroceryListings = useCallback(async () => {
        setIsGroceryLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'groceryList' })
            const responseData = response.items
            if(responseData){
                saveGroceryListings(responseData)
            } else {
                setGroceryListings([])
            }
            setIsGroceryLoading(false)
        } catch (error) {
            console.log(error)
            setIsGroceryLoading(false)
        }
    }, [saveGroceryListings])

    useEffect(() => {
        getGroceryListings()
    }, [getGroceryListings])

    const saveAboutData = useCallback((rawData) => {
        const cleanAboutData = cleanUpAbout(rawData)
        setAbout(cleanAboutData)
    }, [])
    
    const getAbout = useCallback(async () => {
        setIsAboutLoading(true)
        try{
            const response = await client.getEntry('1mknApwsi1u1T6EsuWsPio')
            if(response){
                saveAboutData(response)
            } else {
                setAbout({})
            }
            setIsAboutLoading(false)
        } catch(error) {
            console.log(error);
            setIsAboutLoading(false)
        }
    }, [saveAboutData])

    useEffect(() => {
        getAbout()
    }, [getAbout])

    const saveCarouselData = useCallback((rawData) => {
        const cleanCarouselData = cleanUpCarouselSlides(rawData)
        setCarouselSlides(cleanCarouselData)
    }, [])

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'kitchenCarousel' })
            const responseData = response.items
            if(responseData){
                saveCarouselData(responseData)
            } else {
                setCarouselSlides([])
            }
            setIsCarouselLoading(false)
        } catch (error) {
            console.log(error)
            setIsCarouselLoading(false)
        }
    }, [saveCarouselData])

    useEffect(() => {
        getCarouselSlides()
    }, [getCarouselSlides])

    const contextData = {
        about,
        isAboutLoading,
        isCarouselLoading,
        carouselSlides,
        isGroceryLoading,
        groceryListings
    }

    return (
        <Context.Provider value={contextData}>
            {props.children}
        </Context.Provider>
    )
}