import { marked } from 'marked'
import DOMPurify from 'dompurify'

export const getHTMLData = (rawData) => {
    const htmlString = marked(rawData)
    const sanitizedHTMLString = DOMPurify.sanitize(htmlString);
    return sanitizedHTMLString
}

export const cleanUpAbout = (rawData) => {
    const { sys, fields } = rawData;
    const { id } = sys;
    const aboutTitle = fields.title;
    const aboutContent = getHTMLData(fields.content);
    const aboutImage = fields.image.fields.file.url;
    let cleanAbout = { id, aboutTitle, aboutContent, aboutImage }
    return cleanAbout
}

export const cleanUpCarouselSlides = (rawData) => {
    const cleanSlides = rawData.map((slide) => {
        const { sys, fields } = slide;
        const { id } = sys;
        const slideTitle = fields.title;
        const slideDescription = getHTMLData(fields.description);
        const slideBg = fields.image.fields.file.url;
        const updatedSlide = { id, slideTitle, slideDescription, slideBg }
        return updatedSlide;
    })
    return cleanSlides
}

export const cleanUpGroceryListings = (rawData) => {
    const cleanGrocery = rawData.map((groceryItem) => {
        const { sys, fields } = groceryItem;
        const { id } = sys;
        const groceryTitle = fields.title;
        const groceryLocation = fields.location;
        const updatedGrocery = { id, groceryTitle, groceryLocation }
        return updatedGrocery;
    })
    return cleanGrocery
}