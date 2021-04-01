import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGrindItem } from './GifGrindItem'

export const GifGrid = ({ categories }) => {
    const { loading, data } = useFetchGifs( categories );
    return (
        <>
            <h3 className='animate__animated animate__flipInX'>{categories}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grind'>
                {
                    data.map( img =>(
                        <GifGrindItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
