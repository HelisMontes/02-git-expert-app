import React from 'react'

export const GifGrindItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img src={url} alt='Title'/>
            <p>{title}</p>
        </div>
    )
}
