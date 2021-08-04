import React from "react";
import catalogue from "../catalogue.json"





class film1 extends React.Component {

  render() {
      
    return (
      
      catalogue.map(film => 
        
        parseInt(this.props.match.params.id) === film.id 
          ?  <div><h4>Titre: {film.title}</h4> <div><h4>Producteur: {film.director}</h4></div> <div><h4>Acteur: {film.stars}</h4></div> <div><h4>Description: {film.description}</h4></div> <div><img src={film.image}></img></div> </div> : null
            
      )
    );
  }
}
export default film1;