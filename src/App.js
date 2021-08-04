import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 


import Home from "./catalogue.json";
import film1 from "./components/film1";




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      catalogue: [{
        id: "",
      }]
    }
  }

  render() {
    return (
      <BrowserRouter> 
        <div>
          <nav> 
            <ul>
              
              <li><Link to="/">Acceuil</Link></li> 
              {Home.map(film => <li><Link to={`/${film.id}`}>{film.title}</Link></li>)}
              
              
            </ul>
          </nav>

          { this.state.catalogue.map( film => (<h1>{film.id}</h1>)) }

          <Switch> 
            <Route exact path="/:id" component={film1} /> 
          
						
          </Switch> 

          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
