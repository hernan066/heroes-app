import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    return (
        <section id="cards" className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 560 } }>
            <div className="tarjetas">
                <div className="imagenes">
                    <img id="img-card" src={ heroImages(`./${ id }.jpg`) } className="card-img" alt={ superhero } />
                </div>
                {/* <div  className="datos"> */}
                    
                    <div  className="card-datos">
                        
                        <div id="titulo-tarjeta">
                            <h5 className="card-title"> { superhero } </h5>

                        </div>
                        
                        
                        {<p className="card-text"> { alter_ego} </p>}

                       {/*  {
                            ( alter_ego !== characters ) 
                                && <p className="card-text"> { characters } </p>
                        } */}

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>
                        <div className="link">
                            <Link to={ `./hero/${ id }` }>
                                More...
                            </Link>
                        </div>    
                        

                    </div>

                {/* </div> */}
            </div>
        </section>
    )

}
