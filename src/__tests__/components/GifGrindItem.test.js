import React from 'react';
import { shallow } from "enzyme"
import { GifGrindItem } from "../../components/GifGrindItem"

describe ('Pruebas en componente GifGrid', () =>{
    const title = 'One punch'
    const url = 'https://media4.giphy.com/media/arbHBoiUWUgmc/giphy.gif?cid=2c52d32dg24wnnhv4e6alxkisi6xoa5r3vije6mppdkx6jjf&rid=giphy.gif'
    const wrapper = shallow( <GifGrindItem title={ title } url={ url } /> )

    test('Debe mostar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p').text().trim();
        expect( p ).toBe( title );
    })

    test('debe de tener la imagen igual al url y alt de los pops', () => {
        const img = wrapper.find('img')
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })
    
    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe(true);
    })
})
