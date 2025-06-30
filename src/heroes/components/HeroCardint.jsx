import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {

  if( alter_ego === characters ) return (<></>)

    return <p>{ characters }</p>
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/${ id }.jpg` 

  return (
    <div className="col animate__animated animate__fadeIn">
      <div 
        className="heroCard"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
        alt= { superhero }      
        >
        <div>
          <div className="row no-gutters justify-content-center">
            {/* <div className="col-4">
              <img src={ heroImageUrl } className="card-img" alt={ superhero } />
            </div> */}

            <div className="col-8 text-center">
              <div className="card-body p-1">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                  {/* {
                    ( alter_ego !== characters ) && ( characterByHero )
                  } */}

                  < CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                  {/* <p className="card-text">
                    <small className="text-muted">{ first_appearance }</small>
                  </p> */}
                  
                  <Link 
                    to={`/hero/${ id }`} 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555555', 
                      fontWeight: 'bold'  
                    }}  
                  >
                    Más...
                  </Link>

                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>  
  )
}
