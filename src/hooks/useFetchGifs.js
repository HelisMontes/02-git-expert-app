import { useEffect, useState } from "react"
import { searchApi } from "../helpers/searchApi"

export const useFetchGifs = ( categories ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        searchApi( categories )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [ categories ]) 

    return state; // :{ data:[], loading: true } 
}