import React from 'react';

const CarouselSlide = (props) => {
    const { id, slideTitle, slideDescription, slideBg, slideLink } = props;
    return (
        <div key={id} className="slideWrap" style={{ backgroundImage: `url(${slideBg})`}}>
            <div className="textWrap">
                <h2>{slideTitle}</h2>
                <div dangerouslySetInnerHTML={{ __html: slideDescription }} />
                <a href='home-guide' className='btn'>{slideLink}</a>
            </div>
        </div>
    )
}

export default CarouselSlide;