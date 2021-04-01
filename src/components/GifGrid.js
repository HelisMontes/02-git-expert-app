import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGrindItem } from './GifGrindItem'

export const GifGrid = ({ categories }) => {
    const { loading, data } = useFetchGifs( categories );
    return (
    <div className='card-grind'>
            <h3>{categories}</h3>
            {loading && <p>Loading</p>}
            {
                data.map( img =>(
                    <GifGrindItem 
                        key = {img.id}
                        {...img}
                    />
                ))
            }
        </div>
    )
}
