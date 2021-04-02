import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Prueba en el componente de GifGrid', () => {
    const categories = 'Son Goku';
    test('Cargar el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid categories={ categories }/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar un item cuando se cargan las imagnes de useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://media0.giphy.com/media/eo8UrZwpvjPHi/giphy.gif?cid=2c52d32dnl4k0lwrknihk88lwxo4qz86ygfv8daxk0em8ndn&rid=giphy.gif',
            title: 'rurouni kenshin GIF'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid categories={ categories }/>)
        expect(wrapper).toMatchSnapshot();
    })
})
