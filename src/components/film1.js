import React from "react";
import catalogue from "../catalogue.json"





class film1 extends React.Component {

  render() {
      
    return (
      
      catalogue.map(film => 
        
        this.props.match.params.id === film.id 
          ?  <div>{film.title}</div> : null
        
      )
    );
  }
}
export default film1;