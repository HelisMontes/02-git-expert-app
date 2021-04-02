import { searchApi } from '../../helpers/searchApi'

describe('Pruebas en helpers searchApi', () => {
    test('Validando que reciba 10 registros', async () => {
        const categories = 'One Punch';
        const result = await searchApi( categories );
        expect ( result.length ).toBe(10);
    })

    test('Validando que el registro este vacio', async () => {
        const categories = 'One Punch';
        const result = await searchApi( categories );
        expect ( result.length ).toBeGreaterThan(0)
    })
})
