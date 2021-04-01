import React, { useEffect, useState } from 'react'
import { GifGrindItem } from './GifGrindItem'

export const GifGrid = ({ categories }) => {
    const [imags, setImags] = useState( [] )
    useEffect(() => {
        searchApi()
    }, []) 
    const searchApi = async() => { 
        const url = `https://api.giphy.com/v1/gifs/search?q=Samurai&limit=10&api_key=beSQNThwncZoAsAkDTQroOyG0RaKpe2p`
        const { data } = await ( await fetch( url ) ).json();
        //const result = await fetch( url );
        //const { data }  = await result.json();
        const gifs = data.map( img => {
            const { id, title, images:{ downsized_medium:{ url } } } = img;
            return{
                id, 
                title,
                url
            };
        });
        console.log( gifs )
        setImags( gifs )
    }
    
    return (
        <div className='card-grind'>
            <h3>{categories}</h3>
            {
                imags.map( img =>(
                    <GifGrindItem 
                        key = {img.id}
                        {...img}
                    />
                ))
            }
        </div>
    )
}
