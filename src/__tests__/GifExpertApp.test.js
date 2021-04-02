import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {
    test('Cargando el componente GifExpertApp', () => {
        const wrapper =  shallow(<GifExpertApp />)
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar una lista de categorias', () => {
        const categories = ['Naruto', 'Hinata']
        const wrapper =  shallow(<GifExpertApp defaultCategories={ categories }/>)
        expect( wrapper ).toMatchSnapshot();
        expect ( wrapper.find('GifGrid').length ).toBe(categories.length)
    })
    
})
