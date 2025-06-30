import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas en <AppRouter />', () => { 

    test('debe mostrar el login si no está autenticado', () => { 

        const contextValue = {
            logged: false,
        }
        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={ contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect( screen.getAllByText('login').length).toBe(2)
     })
 })