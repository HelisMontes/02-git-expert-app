export const searchApi = async( categories ) => { 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categories ) }&limit=10&api_key=beSQNThwncZoAsAkDTQroOyG0RaKpe2p`
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
    return gifs
}

