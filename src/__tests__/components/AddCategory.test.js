import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';
describe('Pruebas en el component AddCategory', () => {
    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>)
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    })

    test('Mostrando el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    // test('Debe cambiar la caja de texto', () => {
    //     const imput = wrapper.find('input');
    //     const value = 'Hola Mundo'
    //     imput.simulate('change', { target: { value } }) 
    //     expect( wrapper.find('p').text().trim() ).toBe( value );
    // })

    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Debe debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo'
        // 1. Simular el imput change
        wrapper.find('input').simulate('change', { target: { value } });
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3. Llamar el setCategories
        expect( setCategories ).toHaveBeenCalled();
        // 3.5 Validar que sea llamado como una función
        expect ( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        // 4. el valor del imput debe estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
})
