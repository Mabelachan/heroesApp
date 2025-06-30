const { render, screen, fireEvent } = require("@testing-library/react")
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from '../../../src/auth/context/AuthContext'
import { Navbar } from '../../../src/ui/components/Navbar'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}) )

describe('Pruebas en <Navbar />', () => { 
    const contextValue = {
        logged: true,
        user: {
            name: 'Mabel'
        },

        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )

    test('debe mostrar el nombre de usuario', () => { 
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect( screen.getByText('Mabel') ).toBeTruthy()
     })

     test('debe llamar el logout y navigate cuando se hace click en el botón', () => { 
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole( 'button' )
        fireEvent.click( logoutBtn )

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true})
      })
 })