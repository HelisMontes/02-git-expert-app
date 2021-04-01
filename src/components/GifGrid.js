import React, { useEffect, useState } from 'react'

export const GifGrid = ({ categories }) => {
    useEffect(() => {
        searchApi()
    }, []) 
    const searchApi = async() => { 
        const url = `https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=beSQNThwncZoAsAkDTQroOyG0RaKpe2p`
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
        console.log(gifs)
    }
    
    return (
        <div>
            <h3>{categories}</h3>
        </div>
    )
}
