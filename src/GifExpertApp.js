import React, {useState}from 'react';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const handelAad = () => {
        // setcategories( [...categories, 'HunterXHunter'])
        setcategories(cats => [...categories, 'Hunter X Hunter'])
    }
    return (
        <>
            <h2>GifExpertApp</h2> 
            <hr/>
            <button onClick={ handelAad }>Enviar</button>
            <ul>
                {
                    categories.map(category => <li key={ category }> { category } </li> )
                }
            </ul>
        </>
    );
}