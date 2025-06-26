import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroById, getHeroesByName } from "../helpers"


export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = ''} = queryString.parse( location.search )
  const heroes = getHeroesByName( q )

  const showSearch = ( q.length === 0 )
  const showError = ( q.length > 0 ) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = ( event ) => {
    event.preventDefault()
    if( searchText.trim().length <= 1 ) return
    
    navigate(`?q=${ searchText }`)

  }

  return (
    <>
      <h1>Buscar héroe</h1>

      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">

          <h4>Resultados</h4>
          <hr />

          {/* {
            (q === '')
            ? <div className="alert alert-primary">Busca un héroe</div>
            : ( heroes.length === 0 ) 
              && <div className="alert alert-danger">No hay resultados con: <b> { q } </b></div>
          } */}

          <div 
            className="alert alert-primary animate__animated animate__slideInUp" 
            style={{ display: showSearch ? '' : 'none' }}
          >
            Busca un héroe
          </div>

          <div 
            className="alert alert-danger animate__animated animate__slideInUp" 
            style={{ display: showError ? '' : 'none' }}
          >
            No hay resultados con: <b> { q } </b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }
    
        </div>

      </div>
    </>
  )
}
